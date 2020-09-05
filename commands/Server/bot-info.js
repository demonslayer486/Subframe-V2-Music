const { MessageEmbed } = require('discord.js')
const os = require('os')
let Shard = require("../../shard.js") //("../../models/economy")
module.exports = { 
    name: "bot-info",
    category: "bot",
    run: async (client, message, args) => {
      //            .(

       var milliseconds = parseInt((client.uptime % 1000) / 100),
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        
      await message.delete(); // async
      
       message.channel.send(`Pulling Bot-Info`).then((msg) => {
      const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields(
             {
                    name: "Shard info ",
                    value: Shard,
                    inline: true
                }, 
              {
                    name: "Owner Of The Bot: ",
                    value: "DemonS#7860",
                    inline: true
                },
              {
                    name: "Owner Of The Bot ID: ",
                    value: "492340582543523840",
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Serving ${client.channels.cache.size} channels.`,
                    inline: true
                },
             /* {
                    name: '👥 Guilds I serving',
                    value: `Serving ${client.guilds.cache.size}`,
                    inline: true
                },*/
              {
                    name: '🌐 Servers',
                    value: `Serving ${client.guilds.cache.size} servers.`,
                    inline: true
                }, 
                {
                    name: '👥 Server Users',
                    value: `Serving ${client.users.cache.size}`,
                    inline: true
                }, //Im in ${client.guilds.cache.size} guilds! and I am serving ${client.users.cache.size}
                {
                    name: '⏳ Ping',
                    value: `${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}`,
                    inline: true
                },
              
              {
                    name: '⏳ API Latency Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
              },
              
                {
                    name: 'Join Date',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: 'Server Info',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                },
               {
                    name: ':chart_with_upwards_trend: Uptime',
                    value: "I've been running for** " + hours + " **hours, **" + minutes + "** minutes and **" + seconds + "." + milliseconds + "** seconds!",
                    inline: true
                },
              {
                    name: 'If The Bot Has A Problem',
                    value: `If you have a Problem with the bot please join are server and open a ticket Here is a server link (Link)`,
                    inline: true
                }
            )
     
      .setFooter(`This User: ${message.author.tag} Has Used This Command!`, message.author.displayAvatarURL())
      
      msg.edit();
      msg.edit("\u200B");
         

      message.channel.send(embed)
       
         
       }                                                 
    
      )}}
//nAPI Latency is ${Math.round(bot.ws.ping)}ms
//https://discord.gg/8uvjQAd