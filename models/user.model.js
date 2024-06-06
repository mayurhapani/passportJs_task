const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phone: Number,
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
