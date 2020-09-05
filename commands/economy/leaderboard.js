/* const Discord = require('discord.js')
 const db = require('quick.db')



 module.exports = {
   name: "leaderboard",
  aliases: ["lb"],
  category: "economy",
  usage: "leaderboard",
   description: "Shows You The Leaderboard!",
   run: async (client, message, args) => {


 const embed = new Discord.MessageEmbed()
     .setDescription(`**Input a Leaderboard Option**\n\nCoin Leaderboard: t!leaderboard credits\nFresh Nikes Leaderboard: t!leaderboard nikes\nCar Leaderboard: t!leaderboard car\nMansion Leaderboard: t!leaderboard mansion`)
     .setColor("#FFFFFF")


   if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'credits') {
    let credits = db.startsWith(`credits_${message.guild.id}`, { sort: '.data'})
     let content = "";

   for (let i = 0; i < money.length; i++) {
        let user = bot.users.get(credits[i].ID.split('_')[2]).username

      

        content += `${i+1}. ${user} ~ ${credits[i].data}\n`
    
    }

   const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Credit Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
    
   }
  }
   } */