const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    isremember: String,
    email: String,
    password: String,
})

module.exports = UserSchema;