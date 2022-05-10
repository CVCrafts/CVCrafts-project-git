const mongoose = require('mongoose');
const UserShema = require('./Schema');



const Users = mongoose.model('users', UserShema);


module.exports = Users;