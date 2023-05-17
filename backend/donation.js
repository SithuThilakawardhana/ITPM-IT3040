const mongoose = require("mongoose");

const DonationScehma = new mongoose.Schema(
  {
    name: String,
    address: String,
    email: { type: String, unique: true },
    phone: String,
    food: String,
    stationary: String,
    money: String,
    donateType: String,
    
  },
  {
    collection: "DonationInfo",
  }
);

mongoose.model("DonationInfo", DonationScehma);