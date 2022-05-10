const mongoose = require('mongoose');
require('dotenv').config();

let connectionString = process.env.CONNECTIONSTRING;

const MongooseConnenction = async () =>{
    await mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = MongooseConnenction;
