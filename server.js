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
server.get("/", cors(), async (req, res) => {});

//Login post and get controller
server.post("/login", async (req, res) => {
  var isLogin = false;
  let storeRequest = await req.body;

  let { email, password } = storeRequest;

  if (password !== "undefined" && password !== "null") {
    bcrypt.hash(password, saltRounds, (error, securePassword) => {
      Users.findOne({ email: { $all: `${email}` } }, (err, result) => {
        console.log(result);
        password !== "undefine" &&
          bcrypt.compare(password, result.password, function (err, results) {
            if (results) {
              console.log(results);
              // update all ready object in database here in future..
              const LoginUser = new LoginUsers({
                email: email,
                password: securePassword,
                isLogin: true,
              });
              isLogin = true;
              LoginUser.save();
            } else {
              console.log(error);
            }
          });
      });
    });
  }
});

server.post("/register", (req, res) => {
  let { username, email, password, confirmpassword } = req.body;
  if (password !== "undefined" && confirmpassword !== "undefined") {
    if (password !== confirmpassword) {
      res.redirect("/register");
    } else {
      bcrypt.hash(password, saltRounds, (error, result) => {
        if (result !== "null") {
          const UserDocument = new Users({
            username: username,
            email: email,
            password: result,
          });
          UserDocument.save();
        } else {
          console.log(error.name + " " + error.message);
        }
      });

      // console.log(req.body)
    }
  }
  res.redirect("/login");
});

server.get("/resume/content/", async (req, res) => {
  // code here
  console.log(req.query.templateID);
});

server.post("/resume/content/", async (req, res) => {
  let { templateID } = req.query;
  console.log(req.query.templateID);
  // res.redirect("/editor")
});

server.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
