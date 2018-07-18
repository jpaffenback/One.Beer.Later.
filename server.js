//  Node packages
const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api-routes");
const eventRoutes = require("./routes/event-routes");
const path = require("path");
//  =================================================

//  Connection with express modules
const app = express();
const PORT = process.env.PORT || 5000;
//  ========================================


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use (express.static("client/build"))

//Connection to mongoDB
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/one_beer_letter', ()=>{
    console.log("Succesfuly Connected to MongoDB")
});

app.use("/api",apiRoutes);
app.use("/api", eventRoutes);

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});




// PORT Listener
app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
})