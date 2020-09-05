const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "rickroll",
  aliases: ["rick", "never"],
    description: "never gonna give you up",

    async run (client, message, args){


        const page1 = new Discord.MessageEmbed()
        .setTitle('||never gonna give you up||')
        .setDescription("||We're no strangers to love You know the rules and so do I A full commitment's what I'm thinking of  You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand||")
        .setTimestamp()

        const page2 = new Discord.MessageEmbed()
        .setTitle('||never gonna give you up||')
        .setDescription("||Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you||")
        .setTimestamp()


        const pages = [
                page1,
                page2
        ]

        const emojiList = ['⏪', "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
      
      await message.delete();
    }
} 