/* const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "withdraw",
  aliases: ["with"],
  category: "economy",
  usage: "withdraw (Credits)",
  description: "Withdraw Money From Your Bank!",
  run: async (client, message, args) => {
      
      
      let user = message.author;

  let member = db.fetch(`credits_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`credits_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:white_check_mark:729179100580675615> You have withdrawn all your coins from your bank`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:x:729179985038016644> Specify an amount to withdraw`);
  
  if (!args[0])  if (isNaN(amount)) {
		return message.reply('that doesn\'t seem to be a valid number.');
	{ {
      return message.channel.send(embed2)
  }}
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:x:729179985038016644> You can't withdraw negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:x:729179985038016644> You don't have that much money in the bank`);

  if (member2 < args[0]) if (isNaN(amount)) {
		return message.reply('that doesn\'t seem to be a valid number.');
	{ {
      return message.channel.send(embed4)
  }}

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:white_check_mark:729179100580675615> You have withdrawn ${args[0]} coins from your bank`);

  message.channel.send(embed5)
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
  db.add(`credits_${message.guild.id}_${user.id}`, args[0])
  }
  }
}}} */

 const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
const economy = require("../../models/economy")

module.exports = {
  name: "withdraw",
  aliases: ["with"],
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
    
     /* if(isNaN(amount)) {
      return message.channel.send("I do not understand the number to add");
    } */
    
    // see if they have a wallet
    economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
      if(err) {
        return console.error(err);
      }
      
      if(!data) {
          return message.channel.send(user.username + " you need to have a wallet to withdraw! To get a wallet do $bal");
        }
      
      if (!data.BankBal == null) {
        return message.send("Please don't lie to me ;-;")
        
        if (!data.WalletBal || data.WalletBal == 0) return message.channel.send("Your bank is empty.");
    if (amount > data.WalletBal) return message.channel.send(`Hold on there ${message.author.username} you don't have enough credits to withdarw it ;-;`);
    if (amount === 0) return message.channel.send(`It seems like your bank is emty please work to get some money`);
      } 
      
       data.BankBal -= amount; 
      data.WalletBal += amount;
      
      data.save();
      
      message.channel.send('Successfully withdraw ' + args[1] + ' Into your wallet have a nice day :)')

    });
    
  }
}