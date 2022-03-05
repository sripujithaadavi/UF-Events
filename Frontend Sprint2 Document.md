
# # UF Events - Frontend Sprint 2
Web Application to know about the events conducted at the University of Florida.

Sri Pujitha Adavi - 1133 1222

Nagarjuna Reddy Boya - 7433 5009

Tejdeep Bandreddy - 7206 9922

## Steps to run the frontend

Step 1 -
```http
  $ ng serve
```

Step 2 - Open http://localhost:4200/create from the browser.

Step 3 - Fill the form with event details and submit it. You can see the your events posted at http://localhost:4200/ 






## Sprint 2 Accomplishments

Frontend -

1. We developed a form (http://localhost:4200/create) in which we can fill the event details.

2. The form have the following fields

        Event Name
        Event Info
        Description
        Sample Description
        Price
        Category
        Address
        EventsOn (Date and Time)
3. We can submit the form using Publish Event button.

4. The event details which we filled in the create form are posted to http://localhost:4200/ in a card.

5. We integrated the list API without filters.

6. Installed cypress to run the testcases.

7. Implemented successful test cases to check if we can fill different event details and publish them. 


Backend -

8. Created an API endpoint /getevents to get details of the events stored in the database.

9. Implemented User Management in the backend.

10. Created an API endpoint /signup for successful registration of the user which returns success code upon successful registration.

11. Created /login endpoint and /logout endpoint which returns success code for successful login and logout respectively.
## Frontend Output


![FrontendOutput](https://github.com/sripujithaadavi/UF-Events/blob/main/Frontend%20Sprint%202%20Outputs/FrontendOutput.PNG)


![CreateForm](https://github.com/sripujithaadavi/UF-Events/blob/main/Frontend%20Sprint%202%20Outputs/CreateForm.PNG)


![PostEvent](https://github.com/sripujithaadavi/UF-Events/blob/main/Frontend%20Sprint%202%20Outputs/PostEvent.PNG)


## Testcases Output

![TestcasesOutput](https://github.com/sripujithaadavi/UF-Events/blob/main/Frontend%20Sprint%202%20Outputs/TestcasesOutput.PNG)


