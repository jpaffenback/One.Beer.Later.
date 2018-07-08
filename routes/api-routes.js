const express = require("express");
const mongoose = require('mongoose');
const db = require("../models");
const router = express.Router();

router.get("/signup", (req, res)=>{
 db.Users.create(req.body).then(user=>{
     console.log(user)
 })
});

module.exports = router;