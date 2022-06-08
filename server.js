//#region Import
require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const MongooseConnenction = require("./Models/MongobdConnection");

const { Users, LoginUsers } = require("./Models/Model");
var { expressjwt: jwt } = require("express-jwt");
var jwks = require("jwks-rsa");
const { default: axios } = require("axios");
//#endregion

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://miansonu.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "CVCrafts",
  issuer: "https://miansonu.us.auth0.com/",
  algorithms: ["RS256"],
}).unless({
  path: ["/", "/resume"],
});

const server = express();

server.use("/",jwtCheck);

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

// express-jwt config

//#region call header route
server.get("/", async (req, res) => {
  try {
    const accessToken = req?.headers?.authorization?.split(" ")[1];
    const response = await axios.get("https://miansonu.us.auth0.com/userinfo", {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    const userInfo = response?.data;
    console.log(userInfo);
    res.send(userInfo);
  } catch (error) {
    console.log(error.message);
  }
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
