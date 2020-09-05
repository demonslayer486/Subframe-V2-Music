const Discord = require("discord.js");
module.exports = {
  name: "ping",
  category: "info",

  description: "Returns latency and API ping",
  timeout: 10000,
  run: async (bot, message, args, channel) => {
    //channel.awaitMessages( { time: 60000, errors: ['time'] })
    message.channel.startTyping(5000);
 await   message.channel.send(`🏓 Pinging....`).then(msg => {
    const _ = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setDescription(
          `🏓 Pong!\nLatency is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`
        )
        .setColor("");
      msg.edit(_);
      msg.edit("\u200B");
    });
  message.channel.stopTyping();
          await message.delete(); 
    //message.channel.stopTyping(1)  
  },
};
//Pong ping !!!
