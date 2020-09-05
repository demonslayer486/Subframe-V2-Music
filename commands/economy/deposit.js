 const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
const economy = require("../../models/economy")

module.exports = {
  name: "deposit",
  aliases: ["dep"],
  category: "economy",
  usage: "deposit (Credits)",
  description: "Deposit Credits!",
  run: async (client, message, args) => {
    
    
     
   /*    if (!args[1]) return message.reply('Please specify an amount to deposit.')
    if (message.content.includes('+')) { // if the message includes "-" do this.
        return message.channel.send('Posative money can not be Added.')
    } */

    /// let user = message.mentions.users.first() || message.author;
   let user = message.author;
    
    let amount = parseInt(args[1]);

        //message.author 
        //parseInt(args[1]);
    
      if(isNaN(amount)) {
      return message.channel.send("I do not understand the number to add");
    } 
    
    /* if (!args.slice(1).join(" "))
      return message.channel.send(`You did not specify a amonut!`); */
    // see if they have a wallet
    economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
      if(err) {
        return console.error(err);
      }
      
      //args.slice(1).join(" ")
      
      if(!data) {
          return message.channel.send(user.username + " you need to have a wallet to deposit! To get a wallet do $bal");
        }
      
   /*   if (!data.WalletBal.account === null) {
        return message.send("Please don't lie to me ;-;")
      } 
      */
      
      /* if (!data.WalletBal == null) {
        return message.channel.send(`You lied to me ;-; What did I do to you?`)
      } */
      
      
       if (!data.WalletBal || data.WalletBal == 0) return message.channel.send("Your wallet is empty.");
    if (amount > data.WalletBal) return message.channel.send(`Hold on there ${message.author.username} you don't have enough credits to depost it ;-;`);
    if (amount === 0) return message.channel.send(`It seems like your wallet is emty please work to get some money`);
      
      
      
       data.BankBal += amount; 
      data.WalletBal -= amount;
      
      data.save();
      
      let WArn = new Discord.MessageEmbed()
      .setTitle(`Done!`)
      .setDescription('Successfully deposted ' + args[1] + ' Into your account have a nice day :)')
        .setFooter(`Thank you for banking with us`)
        .setTimestamp()
        message.channel.send(WArn)
      //message.channel.send('Successfully deposted ' + args[1] + ' Into your account have a nice day :)')

    });
    
  }
}
  