const Discord = require("discord.js");

module.exports = {
  name: "announce",
  category: "info",
  usage: "announce <#channel> <message>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    let channel = message.mentions.channels.first();

    if (!channel) {
      return message.channel.send("Please Mention the channel first");
    }
  if(!args.slice[1]) {
      return message.channel.send("Please put the message you want to Announce ;-;")
    }
    
    let embed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle("ANNOUNCEMENT!")
      .setDescription(args.slice(1).join(" "))
      .setTimestamp();
    message.channel.send("Message Sended");

    channel.send(embed);
  }
};

//let MSG = message.content.split(`${client.prefix}announce ${rChannel.id} `).join("");
//let MSG = message.content.slice(`bot.prefix.length+2`)