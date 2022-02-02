package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type DBInstance struct {
	Db *gorm.DB
}

var Database DBInstance

func main() {
	DBConc()
	app := fiber.New()
	//app.Post("/postEvent", postEve)
	log.Fatal(app.Listen(":3000"))

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
	db, err := gorm.Open(sqlite.Open("event.db"), &gorm.Config{})

	if err != nil {
		fmt.Println(err.Error())
		panic("noooo")
	}

	db.AutoMigrate(&Events{})
	Database = DBInstance{
		Db: db,
	}
}
