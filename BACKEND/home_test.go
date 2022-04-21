package main

import (
	"bytes"
	"net/http"

	//"net/http/httptest"
	"testing"

	"github.com/gofiber/fiber/v2"
	"github.com/stretchr/testify/assert"
)

func TestPostEventSuccess(t *testing.T) {
	var data = []byte(`{
		
			"header": "Play the fest",
			"secheader": "Come play with us",
			"desc": "Playstation and PC Games",
			"sampledesc": "Exciting Prizes",
			"postedby": "user1",
			"postedon": "1/12/2022, 2:40:10 PM",
			"price": 10000,
			"category": "gaming",
			"address": "ReitzUnion, 2nd floor 217",
			"imageUrl": "string",
			"eventon": "1/12/2022, 1:30:08 PM",
			"upvoted": true
		
		
	}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/postevent", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)

}

func TestPostEventFailure(t *testing.T) {
	var data = []byte(`{
		
			"header": "Play the fest",
			"secheader": "Come play with us",
			"desc": "Playstation and PC Games",
			"sampledesc": "Exciting Prizes",
			"postedby": "user1",
			"postedon": "1/12/2022, 2:40:10 PM",
			"price": 10000,
			"category": "gaming",
			"address": "ReitzUnion, 2nd floor 217",
			"imageUrl": "string",
			"eventon": "1/12/2022, 1:30:08 PM",
			"upvoted": true,
		
		
	}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/postevent", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)

}

func TestGetEventsSuccess(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("GET", "/getevents", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)

}

func TestGetEventFailure(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("GET", "/getevents", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)

}
func TestLoginWhenInCorrectPasswordIsGiven(t *testing.T) {
	var data = []byte(`{
		"email": "tejdeepb@gmail.com",
		"password": "passwor"
	}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/login", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)

}

func TestLoginWhenCorrectPassWordIsGiven(t *testing.T) {
	var data = []byte(`{
		"email": "tejdeepb@gmail.com",
		"password": "password"
	}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/login", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)

}

func TestRegisterSuccessfulRegistration(t *testing.T) {
	var data = []byte(`{
		"name" : "tejdeep"
		"email": "tejdeepnew@gmail.com",
		"password": "passwordn"
	}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/signup", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)

}

func TestRegisterRegistrationFail(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/signup", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Wrong status code")
	}

	assert.Equal(t, fiber.StatusInternalServerError, response.StatusCode)

}

func TestLogoutFailurelogout(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/Logout", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)

}

func TestLogoutSuccessfulLogout(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/Logout", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)

}

func TestLikeFailure(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/Like", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)

}

func TestLikeSuccess(t *testing.T) {
	var data = []byte(`{
		"userId" : 300,
		"eventId": 1,
		"liked": true
	}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/like", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)

}

func TestGeteventbyidSuccess(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("GET", "/getevent/1", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)

}

func TestGeteventbyidFailure(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("GET", "/getevent/", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)

}

func TestUpdateeventbyidSuccess(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("PUT", "/updatevent/300", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)

}

func TestUpdateeventbyidFailure(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("PUT", "/updatevent/", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)

}

func TestDeleteeventbyidSuccess(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("DELETE", "/deleteevent/300", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)
}

func TestDeleteeventbyidFailure(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("DELETE", "/deleteevent/", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)
}
