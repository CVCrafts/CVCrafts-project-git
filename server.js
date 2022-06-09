require("dotenv").config();

// const express = require("express");

// const bodyParser = require("body-parser");

// const cors = require("cors");

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const MongooseConnenction = require("./Models/MongobdConnection");

const { Users, LoginUsers } = require("./Models/Model");

const { jwtCheck, getTokenResponseAndInformation } = require("./OAuth2/OAuth2.util");

const {
  server,
  BodyParserUrlencodedTrue,
  PORT,
  HomeRouteHandler,
} = require("./ExpressIntegration/Express.util");


// const server = express();

server.use(jwtCheck);

const saltRounds = 10;

BodyParserUrlencodedTrue(true);
// server.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// server.use(bodyParser.json());
// server.use(cors());

// const PORT = process.env.NODE_EXPRESS_PORT || 3001;

// server.use(express.static("public"));

MongooseConnenction().catch((err) => console.log(err.message));

// server.get("/", cors(), async (req, res) => { });

HomeRouteHandler(getTokenResponseAndInformation);

// server.get("/resume", cors(), async (req, res) => {
//   res.send("Hello world to resume route");
// });

server.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  } else {
    next(err);
  }
});
// server.listen(PORT, () => {
//   console.log(`Server is running on port number ${PORT}`);
// });
