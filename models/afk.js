
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    ID: String,
    AFK: Boolean,
    Reason: String        
});
 
module.exports = mongoose.model("AFK", schema);