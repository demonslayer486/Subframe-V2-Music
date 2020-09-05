const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "staffhelp",
    description: "never gonna give you up",

    async run (client, message, args){

       if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send("You do not have enough permissions!");

        const page1 = new Discord.MessageEmbed()
        .setTitle(`Mute a User`)
        .setDescription("$mute @{user}")
        .setTimestamp()

        const page2 = new Discord.MessageEmbed()
        .setTitle('Unmute a Suser')
        .setDescription("$unmute @{user}")
        .setTimestamp()

        const page3 = new Discord.MessageEmbed()
        .setTitle('Warn a User')
        .setDescription("$warn @{user}")
        .setTimestamp()

        const pages = [
                page1,
                page2,
                page3
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}