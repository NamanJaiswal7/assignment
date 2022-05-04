var express = require('express');
const db = require('../models/user');
var router = express.Router();
const userModel = require("../models/user")

router.post('/', function (req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  try {
    if (!req.body) {

      let user = await userModel.findOne({
        "email": email
      })
      if (user) {
        if (user.password == password) {
          return res.status(200).json({
            status: true,
            details: user
          })
        } else {
          return res.status(404).json({
            status: false,
            message: "password not match"
          })
        }
      } else {
        return res.status(404).json({
          status: false,
          message: "email not found"
        })
      }



    } else {
      return res.status(400).json({
        status: false,
        message: "enter details"
      })
    }
  } catch (e) {
    return res.status(500).json({
      message: e.message
    })
  }

});

module.exports = router;