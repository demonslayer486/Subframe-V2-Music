const Discord = require("discord.js")
const economy = require("../../models/economy")


module.exports = {
  name: "addbank",
  aliases: [""],
  category: "economy",
  usage: "addcredits (@user)",
  description: "Bot Owner Adds Credits To A User!",
  run: async (client, message, args) => {
  
    
     if (!["492340582543523840", "445523810788179969"].includes(message.author.id)) return message.reply("you do not have perms to use this command, Only The Owner Of The Bot Have Access")
     
        if (!args[1]) return message.reply('Please specify an amount to add.')
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send('Negative money can not be Added.')
    }

    let user = message.mentions.users.first() || message.author;
    
    let amount = parseInt(args[1]);
    
    if(isNaN(amount)) {
      return message.channel.send("I do not understand the number to add");
    }
    
    // see if they have a wallet
    economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
      if(err) {
        return console.error(err);
      }
      
      if(!data) {
        return message.channel.send("That user needs a wallet first");
      }
      
      data.BankBal += amount;
      
      data.save();
      
      message.channel.send('Successfully added ' + args[1] + ' to ' + args[0])

    });
    
  }
}