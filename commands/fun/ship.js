const Discord = require("discord.js")
module.exports = {
  name: "ship",
  description: "Get the bot to say what ever you want!",
  usage: "<msg>",
  run: async (bot, message, args) => {
    
    let ship = Math.floor(Math.random() * 100) + 1;
    
    let user = message.mentions.users.first()
    let robber = message.author
    
      if(!user) {
        return message.channel.send("Make sure you pick a person who you want to ship!");
      }
  
    let embed = new Discord.MessageEmbed()
          .setTimestamp(Date.now())
          .setTitle("Hmmmm who is Shipping today?")
         /* .addFields(

              { name: "Author", value: `${robber.tag}`},

              { name: "User", value: `${user.tag}`},

              { name: "Amount Stolen", value: `${ship} Credits`}

          ) */
          .setDescription(`**${robber.username}** & **${user.username}** your match is... ${ship}%`)
          .setColor(`RANDOM`)
          message.channel.send(embed).then(m => {
m.react('❤')
m.react('💙')})
    
  }
}