
# UF Events - Sprint 3

Web Application to know about the events conducted at the University of Florida.
## Group Members
Frontend -

1. Sri Pujitha Adavi - 1133 1222

2. Nagarjuna Reddy Boya - 7433 5009

Backend -

3. Tejdeep Bandreddy - 7206 9922
## Steps to run the Frontend
Step 1 -
```http
  $ ng serve
```

Step 2 - To create an account at UF-Events, open http://localhost:4200/register from the browser and register with your details (email, password, first name, last name).

Step 3 - To post an your event, open http://localhost:4200/create from the browser. Fill the form with your event details and submit it.

Step 4 - After filling the Event Create Form you will be redirected to http://localhost:4200/signin where it will ask for your email and password to post your event.

Step 4 - After signingin with your credentials, you can see the your events posted at http://localhost:4200/events 
## Sprint 3 Frontend Accomplishments
1. We have created 4 pages. They are -

        1. register - To create an account at UF-Events. It can be accessed at http://localhost:4200/register

        2. create - Form to fill the event details you want to publish. It can be accessed at http://localhost:4200/create

        3. signin - To login with your credentials. It can be accessed at http://localhost:4200/signin

        4. events - To see all the events (including your event) happening at University of Florida. It can be accessed at http://localhost:4200/events

2. We had connections to all the pages so that we can navigate from one page to another page.

3. The user can register themselves at UF-Events by filling their details.

4. To create an event, users can fill the create form and publish it.

5. To publish their event, users should login with their credentials.

6. Users events will be posted to events page. They also view all the other events happening at University of Florida.

7. If we click on any event, all the details related to that event are displayed.

8. We implemented authentication using JWT tokenization.
## Frontend Output
![Register](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint3%20output/Register.png)

![CreateEventForm](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint3%20output/CreateEventForm.png)

![Signin](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint3%20output/Signin.png)

![EventsDisplay](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint3%20output/EventsDisplay.png)

![EventDescription](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint3%20output/EventDescription.png)

## Testcases Output
Implemented testcases for all 4 pages : register, create, signin, events, 

![Testcases](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint3%20output/Testcases.png)
