const { MongoClient } = require("salvage.db");
const db = new MongoClient({
  mongoURI: require("./token.json").Mongo,
  schema: {
    name: "DemonSPxCc",
  },
});
module.exports = db;