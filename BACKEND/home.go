package main

import (
	"fmt"
	"log"

	"strconv"
	"time"

	"github.com/dgrijalva/jwt-go/v4"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/lib/pq"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DBInstance struct {
	Db *gorm.DB
}

var Database DBInstance

func DBPostSave(c *fiber.Ctx) error {
	event := new(Events)
	if err := c.BodyParser(event); err != nil {
		return c.Status(400).SendString(err.Error())
	}
	Database.Db.Create(&event)
	return c.JSON(&event)
}

func DBGetEvents(c *fiber.Ctx) error {
	var events []Events
	Database.Db.Find((&events))
	return c.JSON(&events)
}
func main() {
	DBConc()
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))
	app.Post("/postevent", DBPostSave)
	app.Get("/getevents", DBGetEvents)
	app.Post("/signup", Register)
	app.Post("/like", Like)
	app.Post("/login", Login)
	app.Post("/logout", Logout)
	app.Get("/getevent/:id", GetEvent)
	app.Listen(":3000")

}

func GetEvent(c *fiber.Ctx) error {

	id, err := c.ParamsInt("id")

	if err != nil {

		return c.Status(400).JSON("eor")

	}

	var event Events

	Database.Db.Find(&event, id)

	if event.ID == 0 {

		return c.Status(400).JSON("error")

	}

	return c.JSON(&event)

}

type Events struct {
	gorm.Model
	EventId    int            `gorm:"primary_key" json:"eventid"`
	Header     string         `json:"header"`
	SecHeader  string         `json:"secheader"`
	Desc       string         `json:"desc"`
	SampleDesc string         `json:"sampledesc"`
	PostedBy   string         `json:"postedby"`
	PostedOn   string         `json:"postedon"`
	Price      int32          `json:"price"`
	Category   string         `json:"category"`
	Address    string         `json:"address"`
	ImageUrl   string         `json:"imageurl"`
	EventOn    string         `json:"eventon"`
	Upvoted    bool           `json:"upvoted"`
	Likes      int            `json:"likes"`
	LikesList  pq.StringArray `gorm:"type:text[]"`
}

type Users struct {
	gorm.Model
	UserId   int `gorm:"primary_key" json:"userId"`
	Name     string
	Email    string
	Password []byte `json:"-"`
}

type Likes struct {
	UserID  string `json:"userId"`
	EventID string `json:"eventID"`
	Liked   bool   `json:"liked"`
}

func contains(s []string, str string) int {
	for idx, v := range s {
		if v == str {
			return idx
		}
	}
	return -1
}
func RemoveUserID(s []string, index int) []string {
	return append(s[:index], s[index+1:]...)
}
func Like(c *fiber.Ctx) error {
	// liked := new(Likes)
	// if err := c.BodyParser(liked); err != nil {
	//  return c.Status(400).JSON(err.Error())
	// }
	var event Events
	var likes Likes
	if err := c.BodyParser(likes); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	eventId := likes.EventID
	liked := likes.Liked
	result := Database.Db.Where("eventid = ?", eventId).First(&event)
	if result != nil && result.RowsAffected == 1 {
		if liked {
			if contains(event.LikesList, likes.UserID) == -1 {
				event.LikesList = append(event.LikesList, likes.UserID)
				event.Likes = event.Likes + 1
				Database.Db.Save(&event)
				return c.Status(200).JSON("likes updated")
			} else {
				fmt.Println("idx true")
				return c.Status(400).JSON("You already liked this event")
			}
		} else {
			idx := contains(event.LikesList, likes.UserID)
			if idx != -1 {
				event.Likes = event.Likes - 1
				event.LikesList = RemoveUserID(event.LikesList, idx)
				Database.Db.Save(&event)
				return c.Status(200).JSON("likes updated")
			} else {
				fmt.Println("idx false")
				return c.Status(400).JSON("You cannot unlike this event")
			}
		}
	} else {
		return c.Status(400).JSON("unable to edit likes")
	}
}

const KeySecret = "secret"

func Register(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}
	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	user := Users{
		Name:     data["name"],
		Email:    data["email"],
		Password: password,
	}

	Database.Db.Create(&user)

	return c.JSON(user)

}

func Login(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}

	var user Users
	Database.Db.Where("email= ?", data["email"]).First(&user)
	if user.ID == 0 {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message": "user not found",
		})
	}
	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message": "incorrect password",
		})
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer: strconv.Itoa(int(user.UserId)),
	})

	token, err := claims.SignedString([]byte(KeySecret))

	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "user could not login",
		})
	}

	cookie := fiber.Cookie{
		Name:     "cook",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)
	return c.JSON(fiber.Map{
		"message": "success",
		"token":   token,
		"user":    user,
	})

}
func User(c *fiber.Ctx) error {
	cookie := c.Cookies("cook")

	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(KeySecret), nil

	})

	if err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "User unauthenticated",
		})
	}

	claims := token.Claims.(*jwt.StandardClaims)

	var user Users
	Database.Db.Where("id=?", claims.Issuer).First(&user)
	return c.JSON(user)
}

func Logout(c *fiber.Ctx) error {
	cookie := fiber.Cookie{
		Name:     "cook",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message": "success ",
	})
}

func DBConc() {
	dbURL := "postgres://postgres:password@localhost:5432/events"
	db, err := gorm.Open(postgres.Open(dbURL), &gorm.Config{})

	if err != nil {
		log.Fatalln(err)
	}

	db.AutoMigrate(&Events{})
	Database = DBInstance{
		Db: db,
	}
}
