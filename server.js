//#region Import
require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const MongooseConnenction = require("./Models/MongobdConnection");

const { Users, LoginUsers } = require("./Models/Model");
const res = require("express/lib/response");
const { stringify } = require("nodemon/lib/utils");
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

//#region Login post and get controller
server.get("/login", async (req, res) => {
  // Code Here
});

var isLogin = false;
server.post("/login", async (req, res) => {
  let storeRequest = await req.body;

  let { email, password, isSignIn } = storeRequest;
  console.log(isSignIn, email);
  // let passwords = password;
  // if (passwords !== "undefined" && passwords !== "null") {
  //   bcrypt.hash(passwords, saltRounds, (error, securePassword) => {
  //     Users.findOne({ email: { $all: `${email}` } }, (err, result) => {
  //       // console.log(result);
  //       result ? ({ password } = result) : (password = "");
  //       result &&
  //         bcrypt.compare(passwords, password, function (err, results) {
  //           if (results) {
  //             LoginUsers.updateOne(
  //               { email: { $all: `${email}` } },
  //               {
  //                 isLogin: false,
  //               },
  //               (bugs, exists) => {
  //                 if (!exists.matchedCount) {
  //                   const LoginUser = new LoginUsers({
  //                     email: email,
  //                     password: securePassword,
  //                     isLogin: true,
  //                   });
  //                   isLogin = true;
  //                   // LoginUser.save();
  //                 }
  //               }
  //             );

  //             res.redirect("/resume");
  //           } else {
  //             results ? "" : res.redirect(404, "/login");
  //             console.log(error);
  //           }
  //         });
  //       result ? "" : res.redirect(404, "/login");
  //     });
  //   });
  // }
});

//#endregion
//#region Register get & post method
server.post("/register", (req, res) => {
//   // let { username, email, password, confirmpassword } = req.body;
//   // if (password !== "undefined" && confirmpassword !== "undefined") {
//   //   if (password !== confirmpassword) {
//   //     res.redirect("/register");
//   //   } else {
//   //     bcrypt.hash(password, saltRounds, (error, result) => {
//   //       if (result !== "null") {
//   //         const UserDocument = new Users({
//   //           username: username,
//   //           email: email,
//   //           password: result,
//   //         });
//   //         UserDocument.save();
//   //       } else {
//   //         console.log(error.name + " " + error.message);
//   //       }
//   //     });

//   //     // console.log(req.body)
//   //   }
//   // }
  res.redirect("/login");
});

//#endregion
//#region Resume/content get & post method
server.get("/resume/content/", async (req, res) => {
  // code here
  console.log(req.query.templateID);
});

server.post("/resume/content/", async (req, res) => {
  let { templateID } = req.query;
  console.log(req.query.templateID);
  // res.redirect("/editor")
});

//#endregion
//#region UserResume get & post method
server.get("/resume", async (req, res) => {
  // res.send(stringify(isLogin));
  // // console.log(req.query);
});
server.post("/resume", (req, res) => {
  isLogin = req.body.isLogin;
  console.log(req.body.isLogin);
  // res.redirect("/resume");
});
//#endregion
server.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});

/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA84TJhg_Mu4cm4zC6d2OFJ-lgddMN5p6Y",
  authDomain: "cvcrafts-ba444.firebaseapp.com",
  projectId: "cvcrafts-ba444",
  storageBucket: "cvcrafts-ba444.appspot.com",
  messagingSenderId: "795713231008",
  appId: "1:795713231008:web:f9772f54a2226d207911c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */
