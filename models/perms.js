  const mongoose = require("mongoose");
let Schema = new mongoose.Schema({
  Perms: Array,
  Role: Array,
  Guild: String,
});
module.exports = mongoose.model("warns", Schema);