const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "adminhelp",
    description: "never gonna give you up",

    async run (client, message, args){
      
      if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send("I'm sorry but only people with `ADMINISTRATOR` pomission can use this commmad");
      
        const page1 = new Discord.MessageEmbed()
        .setTitle(`Reminder`)
        .setDescription("You will have the same pomission as a Staff Member")
        .setColor("#faebd7")
        .setTimestamp()      
       
        const page2 = new Discord.MessageEmbed()
        .setTitle(`Mute a User`)
        .setDescription("$mute @{user}")
        .setColor("#f0f8ff")
        .setTimestamp()

        const page3 = new Discord.MessageEmbed()
        .setTitle('Unmute a Suser')
        .setDescription("$unmute @{user}")
        .setColor("#00ffff")
        .setTimestamp()

        const page4 = new Discord.MessageEmbed()
        .setTitle('Warn a User')
        .setDescription("$warn @{user}")
        .setColor("#7fffd4")
        .setTimestamp()

        const page5 = new Discord.MessageEmbed()
        .setTitle('Warnings a User')
        .setDescription("$warnings @{user}")
        .setColor("")
        .setTimestamp()
        
        const page6 = new Discord.MessageEmbed()
        .setTitle('Clear Warnings')
        .setDescription("$rwarnings @{user}")
        .setColor("")
        .setTimestamp()
        
        const page7 = new Discord.MessageEmbed()
        .setTitle('If you want to add an Emoji')
        .setDescription("$addemoji {emoji} *please note it can only do emojis not pics or gifs*")
        .setColor("")
        .setTimestamp()
        
        const page8 = new Discord.MessageEmbed()
        .setTitle('ban a User')
        .setDescription("$ban @user")
        .setColor("")
        .setTimestamp()
        
        const pages = [
                page1,
                page2,
                page3,
                page4,
                page5, 
                page6,
                page7,
                page8
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}