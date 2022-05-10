const mongoose = require('mongoose');
require('dotenv').config();

let connectionString = process.env.CONNECTIONSTRING;

export const MongooseConnenction = async () =>{
    await mongoose.connect()
}