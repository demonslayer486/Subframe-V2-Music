const mongoose = require("mongoose");
let Schema = new mongoose.Schema({
  WalletBal: Number,
  BankBal: Number,
   RobCooldown: Number,
  WorkCooldown: Number,
  DailyCooldown: Number,
  BegCooldown: Number,
  MonthlyCooldown: Number,
  ServerBoostCooldown: Number,
  UserID: String,
  Guild: String
 
});
module.exports = mongoose.model("economy", Schema);