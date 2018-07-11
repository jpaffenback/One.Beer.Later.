const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  authID: {
    type: String,
    required: true
  }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;