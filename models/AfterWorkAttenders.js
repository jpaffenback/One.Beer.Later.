const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventAttendersSchema = new Schema({
    name: {
    type: String,
    required: true
  },
  image:{
    type: String
  },
  authID: {
    type: String,
    required: true,
    unique: true
  }
});

const EventAttenders = mongoose.model("EventAttenders", EventAttendersSchema);

module.exports = EventAttenders;