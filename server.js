//  Node packages
const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api-routes")
const path = require("path");
//  =================================================

//  Connection with express modules
const app = express();
const PORT = process.env.PORT || 5000;
//  ========================================


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
express.static("client/build")

//Connection to mongoDB
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/One_Beer_letter', ()=>{
    console.log("Succesfuly Connected to MongoDB")
});

app.use("/api",apiRoutes);

// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname, "client/public/index.html"));
// });




// PORT Listener
app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
})