const ms = require('ms');
const moment = require("moment");
const Discord = require("discord.js")
require("moment-duration-format");
module.exports ={
  name: "uptime",
  description: "tell bots uptime",
  usage:"uptime",
  category:"Utility",
  aliases: [""],
  run: async (client,message,args) =>{
    var milliseconds = parseInt((client.uptime % 1000) / 100),
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

    let embed = new Discord.MessageEmbed()
      .setDescription("I've been running for** " + hours + " **hours, **" + minutes + "** minutes and **" + seconds + "." + milliseconds + "** seconds!")
    message.channel.send(embed)
        //message.channel.send(":chart_with_upwards_trend: I've been running for** " + hours + " **hours, **" + minutes + "** minutes and **" + seconds + "." + milliseconds + "** seconds!");
  }
}