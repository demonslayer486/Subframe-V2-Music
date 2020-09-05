const Discord = require("discord.js");

module.exports = {
  name: "bins",
  category: "help",
  description: "Sends a user a dm",
  usage: "ping",
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed();

    embed.setTitle("Server Rules");
    embed.setDescription("Subframe V2 support Rules:");
    embed.setColor("RANDOM");
    embed.addField("For Sourceb -", "https://sourceb.in/");
    embed.addField("For Hastebin -", "https://hastebin.com/");
    embed.addField("For Pastbin -", "https://pastebin.com/");
    message.channel.send(embed); }
  }