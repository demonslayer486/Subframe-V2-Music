const Discord = require("discord.js")

module.exports = {
    name: "page5",
    category: "help",
    description: "Sends a user a dm",
    usage: "ping",
    run: async (client, message, args) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle("Discord ToS")
        .setDescription("Click the link to access the ToS")
        .setColor("RANDOM") 
        .addField("https://discord.com/terms")
        message.author.send(Embed); }
    }