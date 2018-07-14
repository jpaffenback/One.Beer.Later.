const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();
const maps = require("../controllers/map-controller");


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

router.post("/maps", (req, res) => {
  const location = req.body.location;
  maps
    .getLatLng(location)
    .then(data => {
      res.send('serverside',data.data);
    })
    .catch(err => {
        res.send(err);
    });
});

module.exports = router;
