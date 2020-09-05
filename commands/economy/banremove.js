const Discord = require("discord.js")
const economy = require("../../models/economy")


module.exports = {
  name: "banremove",
  aliases: ["bank-remove"],
  category: "economy",
  usage: "addcredits (@user)",
  description: "Bot Owner Adds Credits To A User!",
  run: async (client, message, args) => {
  
    
    {
            if (message.member.roles.cache.some(r => r.name === "Head Administrator") || (r => r.name === "Owner") || (r => r.name === "Co-Owner"))
              
            {
     
        if (!args[1]) return message.reply('Please specify an amount to takeaway.')
    if (message.content.includes('+')) { // if the message includes "-" do this.
        return message.channel.send('posative money can not be Added.')
    }

    let user = message.mentions.users.first() || message.author;
    
    let amount = parseInt(args[1]);
    
    if(isNaN(amount)) {
      return message.channel.send("I do not understand the number to add. Please @(User) Amount");
    }
    
    // see if they have a wallet
    economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
      if(err) {
        return console.error(err);
      }
      
      if(!data) {
        return message.channel.send("That user needs a wallet first");
      }
      
      data.BankBal -= amount;
      
      data.save();
      
      message.channel.send('Successfully removed ' + args[1] + ' to ' + args[0])

    });
            
  } 
}
  }
  }