
# UF Events - Sprint 1
Web Application to know about the events conducted at the University of Florida.
## Group Members
Sri Pujitha Adavi - 1133 1222

Nagarjuna Reddy Boya - 7433 5009

Tejdeep Bandreddy - 7206 9922
## Demo Links
Frontend Demo - https://www.youtube.com/watch?v=D67U3VY7VEw

Backend Demo - https://www.youtube.com/watch?v=4XeY9b4ByOI
## Frontend : Angular
Angular is open source framework. It uses typescript, which is a JavaScript based language that gives us faster applications.

In this, HTML can be used as template language and can be extended to handle application components.
## Front end dependencies installation
It uses node.js and npm to develop modern web applications

npm is used to install all the Javascript Libraries

node is used for all development and build tools.

```http
$ npm install -g npm
```
The Angular CLI : It helps us to develop and maintain 
Angular applications from the command shell

```http
$ npm install -g @angular/cli
```

## Start the front end server
Step 1 - run the below command
```http
  $ ng serve
```

Step 2 - Open http://localhost:4200/ from the browser.
## Frontend Sprint 1 accomplishment
1. We opened a list page.

2. All the events are displayed on list page.

3. In this list, we have card components.

4. In each card component we have title, subtitle, date, time, category, price, description, place, upvoting related to particular event.

5. At present we used mocked data without the backend.

6. Currently we are displaying upvoting feature on UI. Later, we will connect it to the database. 



## Frontend Output
![frontendoutput](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint1%20Output/frontendoutput.png)

![browseroutput](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint1%20Output/browseroutput.png)

## Backend : Go
Go is an open source programming language supported by Google.

It has Built-in concurrency and a robust standard library.

It provides a rich standard library, garbage collection, and dynamic-typing capability. 
## Start the backend server
Step 1. Go to the backend directory

Step 2. Run the below Command
```http
$go run home.go
```





## Frontend Sprint 1 accomplishment
1. We opened a list page.

2. All the events are displayed on list page.

3. In this list, we have card components.

4. In each card component we have title, subtitle, date, time, category, price, description, place, upvoting related to particular event.

5. At present we used mocked data without the backend.

6. Currently we are displaying upvoting feature on UI. Later, we will connect it to the database. 



## Backend Sprint 1 accomplishment
1. We have created a endpoint /postevent.

2. We are able to hit the endpoint /postevent

3. Able to Post the event details

4. Created a PostgreSQL database and successfully connected it to backend.

5. Able to store the event details in the PostgreSQL database.
## Backend Output
![Backend Code](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint1%20Output/Backend%20Code.png)

![Post Man](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint1%20Output/Post%20Man.png)

![PostgreSQL](https://github.com/sripujithaadavi/UF-Events/blob/main/Sprint1%20Output/PostgreSQL.png)