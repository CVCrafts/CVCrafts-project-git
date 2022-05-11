//#region Import
require("dotenv").config();

const express = require("express"); 

const bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");

const server = express();

const MongooseConnenction = require("./Models/MongobdConnection");

const Users = require("./Models/Model");
//#endregion


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
  // console.log(storeRequest);
  // let {remember,email,password} = storeRequest;
  console.log(storeRequest)
  // const UserDocument = await new Users({
  //   isremember: remember,
  //   email: email,
  //   password: password
  // });
  // console.log(UserDocument);
  res.redirect("/login");
});

server.post("/register", (req,res)=> {
  
  let {password,confirmpassword} = req.body;
  if((password !== "undefined") && (confirmpassword !== "undefined")){
    if (password !== confirmpassword) {
      res.redirect('/register')
    } else {
      res.redirect("/login")
      console.log(req.body)
    }
  }
})


server.listen(PORT,()=>{console.log(`Server is running on port number ${PORT}`)})




