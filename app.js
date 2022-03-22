// Required to map our .env file to environment variables
require("dotenv").config();

const express = require("express");
const mysql = require("mysql");

// Include our functions to get data
const getUsers = require("./getUsers");
const getGeneric = require("./getGeneric");

// Initialise app and set port
const app = express();
const port = process.env.PORT || 3000;

// Create connection to database from our enviorment variables
const dbCredentials = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// A dummy route to test our server is running
app.get("/", async (_, res) => {
  res.send("Hello World!");
});

// A route to get all of the users in the database
app.get("/users", async (_, res) => {
  const users = await getUsers(dbCredentials);
  res.json(users);
});

// A route to get a single user by userId from the database
app.get("/user/:id", async (req, res) => {
  const query = `SELECT * FROM users WHERE userId = ${req.params.id}`;
  const user = await getGeneric(dbCredentials, query);
  res.json(user);
});

// Start our server on our specified port
app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
