const mongoose = require("mongoose");

const { UserSchema, LoginSchema } = require("./Schema");


const Users = mongoose.model("users", UserSchema);
const LoginUsers = mongoose.model("login", LoginSchema);

module.exports = {Users,LoginUsers};
