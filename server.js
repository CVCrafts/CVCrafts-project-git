//#region Import
require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const MongooseConnenction = require("./Models/MongobdConnection");

const { Users, LoginUsers } = require("./Models/Model");
//#endregion

const server = express();

const saltRounds = 10;

//#region Middleware method
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.use(bodyParser.json());
server.use(cors());

const PORT = process.env.PORT || 3001;

server.use(express.static("public"));
//#endregion

//#region Mongobd method

//#endregion
MongooseConnenction().catch((err) => console.log(err));

// create user

// home get controller
// server.get("/", cors(), async (req, res) => { });

//#region call header route
server.get("/", (req, res) => {
  res.send("Hello world to home route");
});
//#endregion
//#region call header route
server.get("/resume", cors(), async (req, res) => {
  res.send("Hello world to resume route");
});
//#endregion

server.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});

/*
const { requiresAuth } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
*/

/*
Configure Router
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000/',
  clientID: 'bkH5hl2y8yObNeOlSkJHga2cO44rV124',
  issuerBaseURL: 'https://miansonu.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

*/
