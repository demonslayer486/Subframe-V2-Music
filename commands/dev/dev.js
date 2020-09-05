const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "develop",
  aliases: ["dev"],
    description: "never gonna give you up",

    async run (client, message, args){


        const page1 = new Discord.MessageEmbed()
        .setTitle('dev 1: Fade')
        .setDescription("Fade ID: 445523810788179969")
        .setTimestamp()

        const page2 = new Discord.MessageEmbed()
        .setTitle('Dev 2: **COMING SOON**')
        .setDescription("**COMING SOON**")
        .setTimestamp()

        const page3 = new Discord.MessageEmbed()
        .setTitle('Dev 3: **COMING SOON**')
        .setDescription("**COMING SOON**")
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