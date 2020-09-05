const Discord = require("discord.js")
const economy = require("../../models/economy")


module.exports = {
  name: "resetbal",
  aliases: ["resetwallet"],
  category: "economy",
  usage: "resetbal (@user)",
  description: "Bot Owner Resets someone's balance",
  run: async (client, message, args) => {
  
    
     if (!["492340582543523840", "445523810788179969"].includes(message.author.id)) return message.reply("you do not have perms to use this command, Only The Owner Of The Bot Have Access")
     
    let user = message.mentions.users.first() || message.author;
    
    // see if they have a wallet
    economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
      if(err) {
        return console.error(err);
      }
      
      if(!data) {
        return message.channel.send("That user needs a wallet first");
      }
      
      data.delete();
      
      message.channel.send('Successfully reset wallet of ' + user.tag);

    });
    
  }
}