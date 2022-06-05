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
  let passwords = password;
  if (passwords !== "undefined" && passwords !== "null") {
    bcrypt.hash(passwords, saltRounds, (error, securePassword) => {
      Users.findOne({ email: { $all: `${email}` } }, (err, result) => {
        // console.log(result);
        result ? ({ password } = result) : (password = "");
        result &&
          bcrypt.compare(passwords, password, function (err, results) {
            if (results) {
              // update all ready object in database here in future..
              const LoginUser = new LoginUsers({
                email: email,
                password: securePassword,
                isLogin: true,
              });
              isLogin = true;
              LoginUser.save();
              res.redirect("/resume");
            } else {
              results ? "" : res.redirect(404,"/login");
              console.log(error);
            }
          });
        result ? "" : res.redirect(404,"/login");
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
