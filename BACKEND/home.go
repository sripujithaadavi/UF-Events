package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
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
