const mongoose = require("mongoose");
const dbUrl = require('../config/dbconfig')
let db = mongoose.connect(dbUrl).then(function (db) {
  console.log('connected to db');
}).catch(function (err) {
  console.log(err);
});

const user = new mongoose.Schema({

  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const userModel = mongoose.model("user", user);
module.exports = userModel;