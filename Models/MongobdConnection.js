const mongoose = require('mongoose');
require('dotenv').config();

let connectionString = process.env.NODE_MONGODB_CONNECTIONSTRING;

const MongooseConnenction = async () =>{
    await mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = MongooseConnenction;
