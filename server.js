const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const server = express();

server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());
server.use(cors())

const PORT = process.env.PORT || 5000;

server.use(express.static("public"));


// home get controller
server.get("/",cors(), async(req,res)=>{

})

//Login post and get controller
server.post('/login',async(req,res)=>{
  let storeRequest = req.body;

})



server.listen(PORT,()=>{console.log("Server is running on port number 5000")})




