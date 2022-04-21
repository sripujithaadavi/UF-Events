
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

# Frontend

### Frontend Video Demo


### Cypress test Video 
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



### Testcases Output

![CypressTestCases](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint4%20Output/CypressTestCases.jpg)




