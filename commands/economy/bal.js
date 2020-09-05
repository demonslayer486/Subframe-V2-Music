const Discord = require("discord.js")
const economy = require("../../models/economy");


module.exports = {
  name: "balance",
  aliases: ["bal", "bank"],
  category: "economy",
  usage: "bal",
  description: "shows you your balance",
  run: async (client, message, args) => {


    let user = message.mentions.users.first() || message.author;

    let wallet = economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
      if(err) {
        return console.error(err);
      }

      if(!data) {

        // create a new balance for them (wallet)
        let newBal = new economy({
          User: user.id,
          Guild: message.guild.id,
          WalletBal: 0,
          BankBal: 0,
          RobCooldown: 0,
          WorkCooldown: 0
        });
        
        newBal.save();

        return message.channel.send("A new wallet was created for you!"); 
      }
    
      let moneyEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp(Date.now())
      .setTitle(`Balance Command!`)
      .addFields(

          { name: "User", value: `${user.tag}`},

          { name: "Hand", value: `${data.WalletBal}` },

          { name: "Bank", value: `${data.BankBal}` }

          )
      .setDescription(`**<@${user.id}>'s Balance**`);
      message.channel.send(moneyEmbed)

    });

  }
}