const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shelterEventSchema = new Schema({
   title: { type: String, required: true },
   location: { type: String, required: true },
   date: { type: Date, required }
});

module.exports = mongoose.model("ShelterEvent");