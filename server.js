require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const MongooseConnenction = require("./Models/MongobdConnection");

const { Users, LoginUsers } = require("./Models/Model");

const { jwtCheck } = require("./OAuth2/OAuth2.util");
const resumeRouter = require("./routes/ResumeRoute");
const homeRouter = require("./routes/HomeRoutes");
const selectedResumeRouter = require("./routes/selectedResumeRoute");

const server = express();

server.use(jwtCheck);

const saltRounds = process.env.NODE_SALTROUND;

server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  next();
});
server.use(bodyParser.json());
server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

const PORT = process.env.NODE_EXPRESS_PORT || 3001;

server.use(express.static("public"));

MongooseConnenction().catch((err) => console.log(err.message));

server.use("/", homeRouter);

server.use("/resume", resumeRouter);

server.use("/resume", selectedResumeRouter)

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
