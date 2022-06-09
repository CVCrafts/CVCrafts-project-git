require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const server = express();

const BodyParserUrlencodedTrue = (isEnable) => {
  server.use(
    bodyParser.urlencoded({
      extended: isEnable,
    })
  );
  server.use(bodyParser.json());
  server.use(cors());
  server.use(express.static("public"));
};

const PORT = process.env.NODE_EXPRESS_PORT || 3001;

const HomeRouteHandler = (getToken) => {
  server.get("/", async (req, res) => {
    getToken(req, res);
  });
};

server.get("/resume", cors(), async (req, res) => {
  res.send("Hello world to resume route");
});

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

module.exports = {
  server,
  BodyParserUrlencodedTrue,
  PORT,
  HomeRouteHandler,
};
