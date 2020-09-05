const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "owner",
  aliases: [""],
    description: "never gonna give you up",

    async run (client, message, args){


        const page1 = new Discord.MessageEmbed()
        .setTitle('Owner 1: DemonS')
        .setDescription("DemonS ID: 492340582543523840")
        .setColor("")
        .setTimestamp()

        const page2 = new Discord.MessageEmbed()
        .setTitle('Onwer 2: Fade')
        .setDescription("Fade ID: 445523810788179969")
        .setTimestamp()

        const pages = [
                page1,
                page2
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}