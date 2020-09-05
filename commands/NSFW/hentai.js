const Discord = require("discord.js");

module.exports = {
    name: "hentai",
    description: "rick roll's you lol",
    async run (client, message, args) {
      
      message.channel.send(new Discord.MessageEmbed()
      .setTitle("Here is your Hentai")
      .setDescription("Lol you thought you could do this in my christian minecraft server HELL NAH")
      .setColor("RANDOM")
      .setImage("https://cdn.discordapp.com/attachments/711666329907626037/718907565454524466/heybuddy.jpg"))
    
   
    }
}


