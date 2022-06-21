const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

const LoginSchema = new mongoose.Schema({
  email: String,
  password: String,
  isLogin: Boolean,
});

module.exports = {UserSchema,LoginSchema};