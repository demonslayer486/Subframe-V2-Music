const Discord = require("discord.js")

module.exports = {
    name: "page2",
    category: "help",
    description: "Sends a user a dm",
    usage: "ping",
    run: async (client, message, args) => {
     let embed = new Discord.MessageEmbed();
 
        embed.setTitle("Server Rules")
        embed.setDescription("Worldwide Pokemon Trading Center Rules:")
        embed.setColor("RANDOM") 
        embed.addField("For Help:", "$help")
        embed.addField("For Meme:", "$meme")
        embed.addField("For Reddit:", "$reddit")
        embed.addFiled("To report a user do:", "$report <@user> <reason>");
        message.author.send(embed); }
    }