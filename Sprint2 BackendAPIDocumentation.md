
# Backend API Documentation

## 1.	To post an event
## Endpoint

```http
  /postevent
```

## Method
POST

## URL

https://localhost:3000/postevent/

## Request Body
```http
{
        "header": "Shaving Cream Showdown",
        "secheader": "Yearly",
        "desc": "The purpose of this event is to build housing community",
        "sampledesc": "The purpose of this event is to build housing community",
        "postedby": "user1",
        "postedon": " 1/12/2022, 1:30:08 PM",
        "price": 10,
        "category": "In-person",
        "address": "Weaver Hall",
        "imageurl": "",
        "eventon": "2022-10-03T16:00",
        "upvoted": false

    },
```
## Response code
Status Codes: 200, 400

## 2.	To Get Events
## Endpoint
```http
/getevents
```
## Method
GET

## URL
https://localhost:3000/getevents/

## Response code
Status Codes: 200, 400.

## Response Body
```http
{
        "header": "Shaving Cream Showdown",
        "secheader": "Yearly",
        "desc": "The purpose of this event is to build housing community",
        "sampledesc": "The purpose of this event is to build housing community",
        "postedby": "user1",
        "postedon": " 1/12/2022, 1:30:08 PM",
        "price": 10,
        "category": "In-person",
        "address": "Weaver Hall",
        "imageurl": "",
        "eventon": "2022-10-03T16:00",
        "upvoted": false

    }
```    
    
```http
{
        "header": "Mass on the Grass",
        "secheader": "Weekly",
        "desc": "Celebrate Mass on Ash Wednesday in Campus",
        "sampledesc": "Celebrate Mass on Ash Wednesday in Campus",
        "postedby": "user2",
        "postedon": "2/24/2022, 7:30:08 AM ",
        "price": 4,
        "category": "In-person",
        "address": "Plaza of the Americas",
        "imageurl": "",
        "eventon": "2022-05-03T15:00",
        "upvoted": false
    }
```

## Response code
Status Codes: 200, 400

## 3.	Signup

## Endpoint
```http
/signup
```
## Method
POST
## URL
https://localhost:3000/signup/

## Response code
Status Codes: 200, 400, 401


## 4.	Login
## Endpoint
```http
/login
```
## Method
POST
## URL
https://localhost:3000/login/
## Response code
Status Codes: 200, 400, 401


## 5.	Logout
## Endpoint
/logout
## Method
Post
## URL
https://localhost:3000/logout/

## Response code
Status Codes: 200, 400, 401


