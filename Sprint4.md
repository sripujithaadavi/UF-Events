
# # UF Events - Sprint 4
Welcome to UF-Events...!!!

This is a web application to know different events happening at
the University of Florida. Most of students do not know different activities
going on the campus. Most of the events are conducted by
closed communities. Few Students are willing to attend events and
meet new people, but they do not have any common platform to 
communicate. Our UF-Events will be one of such platforms, where 
every enthusiastic students can search for the events, sort the events based on  Name, Event Before, Event After, priceStart, priceEnd, SortBy, Category and also 
show their interest by upvoting the events. Students who are eager to explore 
can follow the events and participate. This application will allow multiple users to create an account and publish multiple events.
So everyone can publish their events in this portal and also can follow other events published on this application.

## Frontend Members
Sri Pujitha Adavi - 1133 1222

Nagarjuna Reddy Boya - 7433 5009


## Backend Members
Tejdeep Bandreddy - 7206 9922


### UF-Events Demo Functionality
https://user-images.githubusercontent.com/24896236/164373530-6c4af962-5e99-4313-b85b-92b7d7f8437d.mp4

# Frontend

### Cypress testcases Video 
https://user-images.githubusercontent.com/97573204/164366531-c10c9975-47cf-481e-8bd6-a28b3691fb79.mp4

### Frontend Link to Project Board
[UF-Events Repo Link](https://github.com/sripujithaadavi/UF-Events)

[Frontend Project Board](https://github.com/sripujithaadavi/UF-Events/projects/2)

[Hyperlink to User Stories](https://github.com/sripujithaadavi/UF-Events/issues?q=is%3Aissue+is%3Aclosed)

[Hyperlink to Pull Request](https://github.com/sripujithaadavi/UF-Events/pulls?q=is%3Apr+is%3Aclosed)


### Steps to run the frontend

Step 1 -
```http
  $ ng serve
```

Step 2 - Open http://localhost:4200/register from the browser. 

Step 3 - You will be able to signup, login, publish and view the evnets in the UF-Events.

### Steps to run Cypress Testcases
```http
  $ npx cypress open
```

### Frontend Deliverables
1. We implemented the following filters for the posted events on UF-Events
       
        Name
        Event Before
        Event After
        priceStart
        priceEnd
        SortBy
        Category

2. The register form (http://localhost:4200/register) allows us to create an account in UF-Events by taking email address, password of our choice and our name.

3. After submitting the form we will get registered in the UF-Events with the email address and password and redirected to login page.

4. In login page we need to loginin with our credentials (email and password)

5. We will be redirected to events page where we can see different events posted on the page.

6. In events page, we have filter option where we can filter the events in the different ways like

        Name - To filter the events based on name. Example- Mass on the grass.
        
        Event Before- To filter the events that happened before the given date and time. 
        Example- April 25th 2022, 12:00 AM
        
        Event After- To filter the events that are happening after the given date and time. 
        Example- May 1st 2022, 1:00 PM
        
        priceStart- To filter the events based on the price, given the stating price. Example- $8 (shows the events that have the price > 8)
        
        priceEnd - To filter the events based on the price, given the maximum price. Example- $6 (shows the events that have the price < 6 )
        
        SortBy - To sort the events based on likes and price
        
        Category - To filter the events based on the category. Example- In-person

7. We have implemented profile icon, where we can see the name of the user accessing the account.

8. In profile drop down, we have an option to publish an event.

9. If we go to Publish an Event, the create form (http://localhost:4200/create) will be opened where we 
should give details of the event like Event Name, Event Info, Description, Sample Description, Price, Category, Address, EventsOn (Date and Time).

10. After filling the form we will publish the event which will be posted to events page.

11. We have a detailed view of the published events by clicking on the event components.

12. A user can publish multiple events

13. Multiple accounts can be created using register form (http://localhost:4200/register)

14. User can logout from their account using the logout option from the profile icon.

15. Implemented successful cypress test cases to check 

        Functionality of signup, login, logout, publish event, apply filters, clear filters.
        
        User can publish multiple events.

        Multiple accounts can be created.

        Successful working of the filter -  Name, Event Before, Event After, priceStart, priceEnd, SortBy, Category. 

        Correct format of register form, login form, events form, create form and filters.


### Frontend Output

![SignUp](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/SignUp.jpg)

![Login](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/Login.jpg)

![EventswithFilters](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/EventswithFilters.jpg)

![Create](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/Create.jpg)

![LogintoPublish](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/LogintoPublish.jpg)

![nameFilter](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/nameFilter.jpg)

![EventBeforeFilter](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/EventBeforeFilter.jpg)

![EventAfterFilter](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/EventAfterFilter.jpg)

![priceStartFilter](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/priceStartFilter.jpg)

![priceEndFilter](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/priceEndFilter.jpg)

![SortByprice](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/SortByprice.jpg)

![CategoryFilter](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/CategoryFilter.jpg)

![DetailedEventView](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/DetailedEventView.jpg)

![PublishLogoutOptions](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/PublishLogoutOptions.jpg)



### Frontend Cypress Testcases Output

![CypressTestCases](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/CypressTestCases.jpg)

## Backend

## How to start the backend server
Step 1. Go to the backend directory

Step 2. Run the below Command
```http
$go run home.go
```

### Unit testing demo


https://user-images.githubusercontent.com/97720109/164558870-568181b9-f383-44b9-b168-e04917c879ec.mp4



## Backend API Documentation



## 1.	To post an event


**Endpoint:**

```http
  /postevent
```

**Request Method:**
POST

**Target URL:**

https://localhost:3000/postevent/

**Request Body:**
```http
{
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
}
```

**Response Body:**
```http
{
    "ID": 248,
    "CreatedAt": "2022-04-21T01:31:36.1501906-04:00",
    "UpdatedAt": "2022-04-21T01:31:36.1501906-04:00",
    "DeletedAt": null,
    "eventid": 0,
    "header": "Play the fest",
    "secheader": "Come play with us",
    "desc": "Playstation and PC Games",
    "sampledesc": "Exciting Prizes",
    "postedby": "user1",
    "postedon": "1/12/2022, 2:40:10 PM",
    "price": 10000,
    "category": "gaming",
    "address": "ReitzUnion, 2nd floor 217",
    "imageurl": "",
    "eventon": "1/12/2022, 1:30:08 PM",
    "upvoted": true,
    "likes": 0,
    "LikesList": null
}
```

**Possible Response codes**: 200,400

**Examples**: 200 OK and 400 Bad Request.

**Output Screenshot-**


![1.postevent](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/1.postevent.png)


## 2.	To Get Events



**Endpoint:**
```http
/getevents
```
**Request Method:**
GET

**Target URL:**
https://localhost:3000/getevents/



## Response Body
```http
[
    {
        "ID": 244,
        "CreatedAt": "2022-04-20T23:34:49.086748-04:00",
        "UpdatedAt": "2022-04-20T23:34:49.086748-04:00",
        "DeletedAt": null,
        "eventid": 0,
        "header": "Mass on the Grass",
        "secheader": "Weekly",
        "desc": "Celebrate Mass on Ash Wednesday in Campus",
        "sampledesc": "Celebrate Mass on Ash Wednesday in Campus",
        "postedby": "",
        "postedon": "",
        "price": 4,
        "category": "In-person",
        "address": "Plaza of the Americas",
        "imageurl": "",
        "eventon": "2022-05-03T15:00",
        "upvoted": false,
        "likes": 0,
        "LikesList": null
    },
    {
        "ID": 245,
        "CreatedAt": "2022-04-20T23:34:57.035791-04:00",
        "UpdatedAt": "2022-04-20T23:34:57.035791-04:00",
        "DeletedAt": null,
        "eventid": 0,
        "header": "Shaving Cream Showdown",
        "secheader": "Yearly",
        "desc": "The purpose of this event is to build housing community",
        "sampledesc": "The purpose of this event is to build housing community",
        "postedby": "",
        "postedon": "",
        "price": 10,
        "category": "In-person",
        "address": "Weaver Hall",
        "imageurl": "",
        "eventon": "2022-10-03T16:00",
        "upvoted": false,
        "likes": 0,
        "LikesList": null
    }
]
```

**Possible Response codes**: 200,400

**Examples**: 200 OK and 400 Bad Request.

**Output Screenshot-**

![2.GetEvents](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/2.GetEvents.png)


## 3.	Signup


**Endpoint:**
```http
/signup
```
**Request Method:**
POST

**Target URL:**
https://localhost:3000/signup/

## Request Body
```http
{
    "name":"Tejdeepb",
    "email":"tejdeepb@gmail.com",
    "password":"password"
}
```
## Response Body
```http
{
    "ID": 160,
    "CreatedAt": "2022-04-21T02:46:12.8670622-04:00",
    "UpdatedAt": "2022-04-21T02:46:12.8670622-04:00",
    "DeletedAt": null,
    "userId": 0,
    "Name": "Tejdeepb",
    "Email": "tejdeepb@gmail.com"
}
```

**Possible Response codes**: 200, 500

**Examples**: 200 OK and 500 Internal Server Error.

**Output Screenshot-**

![3.Signup](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/3.Signup.png)


## 4.	Login



**Endpoint:**
```http
/login
```
**Request Method:**
Post

**Target URL:**
https://localhost:3000/login/

## Request Body
```http
{
    "email":"tejdeepb@gmail.com",
    "password":"password"
}
```
## Response Body
**Positive Scenario-**
```http
{
    "message": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIwIn0.VaulONRD13RfmXfESP9Eo65rDyrIPZvRj58NjHiYwcc",
    "user": {
        "ID": 160,
        "CreatedAt": "2022-04-21T02:46:12.867062-04:00",
        "UpdatedAt": "2022-04-21T02:46:12.867062-04:00",
        "DeletedAt": null,
        "userId": 0,
        "Name": "Tejdeepb",
        "Email": "tejdeepb@gmail.com"
    }
}
```
**Negative Scenario-**
```http
{
    "message": "user not found"
}
```

```http
{
    "message": "incorrect password"
}
```
**Possible Response codes**: 200,404,400

**Examples**: 200 OK, 404 Not Found, 400 Bad Request.

**Output Screenshots-**

![4.login](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/4.login.png)



![4.login 2](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/4.login%202.png)



![4.login 3](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/4.login%203.png)


## 5.	Logout
**Endpoint:**
```http
/logout
```
**Request Method:**
POST

**Target URL:**
https://localhost:3000/logout/

## Response Body
```http
{
    "message": "success"
}
```

**Possible Response codes**: 200, 400

**Examples**: 200 OK, 400 Bad Request

**Output Screenshot-**

![5.logout](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/5.logout.png)

## 6.	To Like an event
**Endpoint:**

```http
  /like
```

**Request Method:**
Post

**Target URL:**

https://localhost:3000/like/

**Request Body:**
```http
{
    "userId":300,
    "eventID":55,
    "liked":true
}
```
**Response Bodies in different scenarios:**
```http
"likes updated"

```
```http
"You already liked this event"
```
```http
"You cannot unlike this event"
```
```http
"unable to edit likes"

```
**Possible Response codes**: 200,400

**Examples**: 200 OK and 400 Bad Request.

**Output Screenshot-**

![6.like](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/6.like.png)


## 7.	To get an event by id
**Endpoint:**

```http
  /getevent/:id
```

**Request Method:**
Get

**Target URL:**

https://localhost:3000/getevent/245

**Positive Scenario-**
```http
{
        "ID": 245,
        "CreatedAt": "2022-04-20T23:34:57.035791-04:00",
        "UpdatedAt": "2022-04-20T23:34:57.035791-04:00",
        "DeletedAt": null,
        "eventid": 0,
        "header": "Shaving Cream Showdown",
        "secheader": "Yearly",
        "desc": "The purpose of this event is to build housing community",
        "sampledesc": "The purpose of this event is to build housing community",
        "postedby": "",
        "postedon": "",
        "price": 10,
        "category": "In-person",
        "address": "Weaver Hall",
        "imageurl": "",
        "eventon": "2022-10-03T16:00",
        "upvoted": false,
        "likes": 0,
        "LikesList": null
    }
```
**Negative Scenario-**
```http
    "error"
```
**Possible Response codes**: 200,400

**Examples**: 200 OK and 400 Bad Request.

**Output Screenshots-**

![7.getEventbyId](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/7.getEventbyId.png)



![7.getEventbyId 2](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/7.getEventbyId%202.png)



## 8.	To update an event by id
**Endpoint:**

```http
  /updatevent/:id
```

**Request Method:**
Put

**Target URL:**

https://localhost:3000/updateevent/300

**Request Body:**
```http
    {
        "eventid": 55,
        "header": "Mass on the Grass",
        "secheader": "Weekly",
        "desc": "Celebrate Mass on Ash Wednesday in Campus",
        "sampledesc": "Celebrate Mass on Ash Wednesday in Campus",
        "postedby": "",
        "postedon": "",
        "price": 4,
        "category": "In-person",
        "address": "Plaza of the Americas",
        "imageurl": "",
        "eventon": "2022-05-03T15:00",
        "upvoted": false,
        "likes": 0,
        "LikesList": null
    }
```
**Response Body:**

**Positive Scenario-**
```http
{
    "ID": 300,
    "CreatedAt": "2022-04-20T23:34:49.086748-04:00",
    "UpdatedAt": "2022-04-21T14:24:48.9669553-04:00",
    "DeletedAt": null,
    "eventid": 55,
    "header": "Mass on the Grass",
    "secheader": "Weekly",
    "desc": "Celebrate Mass on Ash Wednesday in Campus",
    "sampledesc": "Celebrate Mass on Ash Wednesday in Campus",
    "postedby": "",
    "postedon": "",
    "price": 4,
    "category": "In-person",
    "address": "Plaza of the Americas",
    "imageurl": "",
    "eventon": "2022-05-03T15:00",
    "upvoted": false,
    "likes": 0,
    "LikesList": null
}
```
**Negative Scenario-**

```http
    "no such event exists"
```
**Possible Response codes**: 200,400

**Examples**: 200 OK and 400 Bad Request.

**Output Screenshots-**

![8.Updateevent](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/8.Updateevent.png)



![8.Updateevent 2](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/8.Updateevent%202.png)




## 9.	To delete an event by id
**Endpoint:**

```http
  /deleteevent/:id
```

**Request Method:**
Delete

**Target URL:**

https://localhost:3000/deleteevent/246

**Response Body:**

**Postive Scenario-** 
```http
        "event deleted"
```
**Negative Scenario-**
```http
        "no such event exists"
```

**Possible Response codes**: 200,400

**Examples**: 200 OK and 400 Bad Request.

**Output Screenshots-**

![9.Delete](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/9.Delete.png)



![9.Delete 2](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/9.Delete%202.png)





## Backend Sprint 4 Deliverables

* Implemented retrieve event for specific user functionality.
* Implemented retrieve events with user liked or not functionality.
* Implemented retrieve endpoint to update event by user id functionality.
* Implemented delete event functionality
* Implemented update event functionality
* Refactored code and fixed bugs for ‘like’ end point.
* Refactored code and fixed bugs for dislike functionality
* Tested all the API calls
* Unit tested all the functionalities.



