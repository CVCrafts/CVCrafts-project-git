//#region Import
require("dotenv").config();

const express = require("express"); 

const bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");

const bcrypt = require('bcrypt');

const MongooseConnenction = require("./Models/MongobdConnection");

const Users = require("./Models/Model");
//#endregion

const server = express();

const saltRounds = 10;

//#region Middleware method
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());
server.use(cors())

const PORT = process.env.PORT || 3001;

server.use(express.static("public"));
//#endregion

//#region Mongobd method

//#endregion
MongooseConnenction().catch(err => console.log(err));

// create user 


// home get controller
server.get("/",cors(), async(req,res)=>{

})

//Login post and get controller
server.post("/login",async(req,res)=>{
  let storeRequest = await req.body;

  let {email,password} = storeRequest;
 


  res.redirect("/login");
});

server.post("/register", (req,res)=> {
  
  let {username,email,password,confirmpassword} = req.body;
  if((password !== "undefined") && (confirmpassword !== "undefined")){
    if (password !== confirmpassword) {
      res.redirect('/register')
    } else {
      bcrypt.hash(password,saltRounds,async(error, result)=>{
        if ((result !== "undefined") || (result !== "null")) {
          const UserDocument = await new Users({
            username: username,
            email: email,
            password: result,
          });
          UserDocument.save();
        } else {
          console.log(error.name + " " + error.message)
        }
      })
      res.redirect("/login")
      // console.log(req.body)
    }
  }
})


server.listen(PORT,()=>{console.log(`Server is running on port number ${PORT}`)})




