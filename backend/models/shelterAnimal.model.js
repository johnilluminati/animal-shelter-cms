const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
   name: { type: String, required: true },
   animalType: { type: String, required: true },
   breed: { type: String, required: true },
   age: { type: String, required: true },
   description: { type: String, required: true },
   shelterInfo: {
      name: { type: String, required: true },
      address: { type: String } // determine if this is really needed here

   }
});

mondule.exports = mongoose.model("ShelterAnimal");