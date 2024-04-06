Hello!!

After cloning firstly run the command {npm i} in the terminal
it will install all the required dependencies

now create a new sql connection and connect to the db
You need to create a db and in this db you need to create 3 tables
user_table
train_table
booking_table
you can change the name accordingly in the commands and the .env file

-----------------------

you can use these sql queries

CREATE TABLE user_table (
    user_id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE train_table (
    train_id VARCHAR(255) PRIMARY KEY,
    train_name VARCHAR(255) NOT NULL,
    train_source VARCHAR(255) NOT NULL,
    train_destination VARCHAR(255) NOT NULL,
    seat_capacity INT NOT NULL,
    arrival_time_at_source TIME NOT NULL,
    arrival_time_at_destination TIME NOT NULL,
    available_seats INT NOT NULL
);

CREATE TABLE booking_table (
    booking_id VARCHAR(255) PRIMARY KEY,
    train_id VARCHAR(255) NOT NULL,
    train_name VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    no_of_seats INT NOT NULL,
    seat_numbers TEXT NOT NULL,
    arrival_time_at_source TIME NOT NULL,
    arrival_time_at_destination TIME NOT NULL,
    FOREIGN KEY (train_id) REFERENCES train_table(train_id),
    FOREIGN KEY (user_id) REFERENCES user_table(user_id)
);

-----------------------

You can start the project by the command "npm start"

-----------------------

The folder "api-routes" has a file allApiRoutes which has all the required apis
API routes :-

RegisterUser: { type: "POST", route: "/api/signup" ,
  body: {
        email
        user_name
        password
  }
},
LoginUser: { type: "POST", route: "/api/login" , body:{
   username
   password
}},

This command can only be run by the ADMIN and needs the adminkey to be sent in header
AddNewTrain: { type: "POST", route: "/api/trains/create" , body:{
      train_name
      source
      destination
      seat_capacity
      arrival_time_at_source
      arrival_time_at_destination
      available_seats
}},

GetSeatAvailability: { type: "GET", route: "/api/trains/availability?source=SOURCE&destination=DESTINATION" },

BookSeat: { type: "POST", route: "/api/trains/{train_id}/book", body:{
      user_id
      no_of_seats
}},

GetSpecificBookingDetails: { type: "GET", route: "/api/bookings/{booking_id}" }

-----------------------

And create a .env and add the following fields

PORT = 

SQL_USER = {user_name created while creating the connection}

SQL_PASSWORD = {password entered while creating the connection to db}

SQL_DB = {db name}

SQL_USER_TABLE = user_table {name of table, you can use this if not changed in the above sql queries}

SQL_TRAIN_TABLE = train_table {name of table, you can use this if not changed in the above sql queries}

SQL_TRAIN_BOOK_TABLE = booking_table {name of table, you can use this if not changed in the above sql queries}

JWT_KEY = ""

APIKEY = ""

-----------------------
