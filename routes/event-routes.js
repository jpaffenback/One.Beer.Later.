const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();
const maps = require("../controllers/map-controller");


router.post("/attending", (req, res)=>{
    console.log("Attending!")
    console.log(req.body)
 db.EventAttenders.create(req.body).then(atternters=>{
     res.json(atternters)
 })
 .catch(function(err) {
     console.log(err);
 })

});

router.get("/attending", (req, res)=>{
    console.log("Attendingers.....!")
 db.EventAttenders.find({}).then(atternters=>{
     res.json(atternters)
 })
 .catch(function(err) {
     console.log(err);
 })
});


router.post("/attending", (req, res)=>{
    console.log("delete")
 db.EventAttenders.deleteOne({authID:req.body}).then(atternters=>{
     res.json(atternters)
 })
 .catch(function(err) {
     console.log(err);
 })
});




module.exports = router;