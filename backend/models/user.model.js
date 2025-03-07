require("dotenv").config();

const config = require("../config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);

const Schema = mongoose.Schema;

const userSchema = new Schema({
   fullName: { type: String },
   email: { type: String },
   password: { type: String },
   createdOn: { type: Date, default: new Date().getTime() }
});

module.exports = mongoose.model("User", userSchema);