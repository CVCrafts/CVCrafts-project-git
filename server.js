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
// const jwt = require('jsonwebtoken').verify;
var jwks = require("jwks-rsa");
const { default: axios } = require("axios");
//#endregion

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    credentialsRequired: true,
    jwksUri: "https://cvcrafts.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "CVCrafts",
  issuer: "https://cvcrafts.us.auth0.com/",
  algorithms: ["RS256"],
}).unless({
  path:[]
});

const server = express();

server.use("/", jwtCheck);

// server.use(function (req, res, next) {
//   console.log("------------------------------------");
//   console.log("route middleware to verify a token");
//   console.log("");
//   // check header or url parameters or post parameters for token
//   var token =
//     req?.body.access_token ||
//     req?.query.access_token ||
//     req?.headers["x-access-token"] ||
//     req?.cookies.access_token;
//   console.log("req.cookies.access_token:", req?.cookies?.access_token);
//   console.log("token:", token);
//   // decode token
//   if (token) {
//     // verifies secret and checks exp
//     jwt.verify(token, app.get("secret"), function (err, decoded) {
//       if (err) {
//         console.log("jwt.verify ERROR");
//         return res.json({
//           success: false,
//           message: "Failed to authenticate token.",
//           err: err,
//         });
//       } else {
//         console.log("jwt.verify OK");
//         // if everything is good, save to request for use in other routes
//         req.decoded = decoded;
//         next();
//       }
//     });
//   } else {
//     // if there is no token
//     // return an error
//     return res.status(403).send({
//       success: false,
//       message: "No token provided.",
//     });
//   }
// });

const saltRounds = 10;

//#region Middleware method
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.use(bodyParser.json());
server.use(cors());

const PORT = process.env.NODE_EXPRESS_PORT || 3001;

server.use(express.static("public"));
//#endregion

//#region Mongobd method

//#endregion
MongooseConnenction().catch((err) => console.log(err.message));

// create user

// home get controller
// server.get("/", cors(), async (req, res) => { });

// express-jwt config

//#region call header route
server.get("/", async (req, res) => {
  try {
    const accessToken = req?.headers?.authorization?.split(" ")[1];
    const response = await axios
      .get("https://cvcrafts.us.auth0.com/userinfo", {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          withCredentials: true,
        },
      })
      .catch((error) => console.log(error.message));
    const userInfo = response?.data;
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

server.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  } else {
    next(err);
  }
});
server.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
