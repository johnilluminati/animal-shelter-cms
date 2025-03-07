const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shelterSchema = new Schema({
   title: { type: String, required: true },
   locations: [
      {
         locationName: { type: String },
         address: { type: String },
         isMainLocation: { type: Boolean, required: true }
      }
   ],
   websiteUrl: { type: String }
});

module.exports = mongoose.model("Shelter");