
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BeerBarsSchema = new Schema({
    blogmap:{
        type: String
      },
      city:{
        type: String
      },
      country:{
        type: String
      },
      id:{
        type: Number,
        unique:true
      },
      imagecount:{
        type: String
      },
      name:{
        type: String
      },
      overall:{
        type: String
      },
      phone:{
        type: String
      },
      proxylink:{
        type: String
      },
      reviewlink:{
        type: String
      },
      state:{
        type: String
      },
      status:{
        type: String
      },
      street:{
        type: String
      },
      url:{
        type: String
      },
      zip:{
        type: String
      }
});

const BeerBars = mongoose.model("BeerBars", BeerBarsSchema);

module.exports = BeerBars;
