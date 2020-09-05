const db = require("quick.db");
const discord = require("discord.js");

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  run: async (client, message, args) => {
    //OWNER ONLY COMMAND
    let devs = ["492340582543523840"]; //492340582543523840
      if (!devs.includes(message.author.id)) {
        return message.channel.send(
          "Only the Owner can execute the `status` command!"
    )}
          
    //ARGUMENT
    if (!args.length) {
      return message.channel.send("Please give status message");
    }

    db.set(`status`, args.join(" "));
    await message.channel.send("Updated the bot status");
    process.exit(1);
  }
};
