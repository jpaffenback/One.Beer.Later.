const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();
const maps = require("../controllers/map-controller");


router.post("/attending", (req, res)=>{
    console.log("Hit the POST route for /attending");
    console.log("Attending!")
    db.EventAttenders.create(req.body).then(atternters=>{
        console.log("Your Results");
        console.log("===========================")
        console.log(atternters);
        res.json(atternters)
    })
    .catch(function(err) {
        console.log("Hit an error on the POST route");
        console.log("===========================");
        console.error(err);
    })

});

router.get("/attending", (req, res)=>{
    console.log("Hit the GET route for /attending");
    console.log("Attendingers.....!")
    db.EventAttenders.find({}).then(atternters=>{
        console.log("Your Results");
        console.log("===========================");
        console.log(atternters);
        res.json(atternters)
    })
    .catch(function(err) {
        console.log("Hit an error on the GET route");
        console.log("===========================");
        console.error(err);
    })
});


router.delete("/leave", (req, res)=>{
    console.log("delete")
    db.EventAttenders.deleteOne({"authID":req.body.authID})
    .then(atternters=>{
        console.log("Attenders", atternters)
        res.json(atternters)
    })
    .catch(function(err) {
        console.log(err);
    })
});

// =============Bars routing=============

// ============= POST======================
router.post("/beerbars", (req, res)=>{
    console.log("BeerBars.....!")
    // console.log(req.body)
    db.BeerBars.insertMany(req.body).then(bars=>{
        console.log(bars);
        res.json(bars)
    })
    .catch(function(err) {
        console.log(err);
    })

});

router.get("/beerbars", (req, res)=>{
    console.log("Attendingers.....!")
    db.BeerBars.find({}).then(atternters=>{
        res.json(atternters)
    })
    .catch(function(err) {
        console.log(err);
    })
});



module.exports = router;