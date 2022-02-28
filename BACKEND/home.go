package main

import (
	"log"

	"strconv"
	"time"

	"github.com/dgrijalva/jwt-go/v4"
	"github.com/gofiber/fiber/v2"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"golang.org/x/crypto/bcrypt"
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
func main() {
	DBConc()
	app := fiber.New()
	app.Post("/postevent", DBPostSave)

	app.Listen(":3000")

}

type Events struct {
	Header     string `json:"header"`
	SecHeader  string `json:"secheader"`
	Desc       string `json:"desc"`
	SampleDesc string `json:"sampledesc"`
	PostedBy   string `json:"postedby"`
	PostedOn   string `json:"postedon"`
	Price      int32  `json:"price"`
	Category   string `json:"category"`
	Address    string `json:"address"`
	ImageUrl   string `json:"imageurl"`
	EventOn    string `json:"eventon"`
	Upvoted    bool   `json:"upvoted"`
}

type Users struct {
	Id       uint
	Name     string
	Email    string
	Password []byte `json:"-"`
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
	if user.Id == 0 {
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
		Issuer: strconv.Itoa(int(user.Id)),
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
