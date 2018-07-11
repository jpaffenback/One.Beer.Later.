const express = require("express");
const mongoose = require('mongoose');
const db = require("../models");
const router = express.Router();

router.post("/signup", (req, res)=>{
    console.log("Sign Up!")
    console.log(req.body)
 db.Users.create(req.body).then(user=>{
     res.json(user)
 })
 .catch(function(err) {
     console.log(err);
 })
});

module.exports = router;