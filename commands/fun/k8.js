const Discord = require("discord.js")

module.exports = {
    name: "k8",
    category: "help",
    description: "Sends a user a dm",
    usage: "ping",
    run: async (client, message, args) => {
     let embed = new Discord.MessageEmbed();
 
        embed.setTitle("")
        embed.setDescription("")
        embed.setColor("RANDOM") 
        embed.setImage('https://media.discordapp.net/attachments/714220630618275940/736602066159665152/ezgif.com-video-to-gif_4.gif')
        embed.setFooter(`Who pinged ${message.author.username}!`);
        message.channel.send(embed); 
     }
    }
