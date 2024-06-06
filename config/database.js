const mongoose = require("mongoose");

const db = async () => {
  mongoose.connect("mongodb+srv://hapanimayur:Love1224@cluster0.iyurgqh.mongodb.net/passportTask");
  console.log("Database connection established");
};

module.exports = db;
