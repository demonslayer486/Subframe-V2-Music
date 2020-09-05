const discord = require("discord.js")
const { OwnerID } = require('../../config.json')

module.exports = {
  name: "partner-150",
  category: "info",
  description: "Get the stats of corona",
  usage: "corona all or corona <country>",
  run: async (client, message, args, guild ) => {
    
   // args.slice(0).join(" ");
    
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You do not have admin, ${message.author.username}`
      );
    
    if (!args[0]) {
      return message.channel.send(`${message.author.username} I need to know who we are partnering with`)
    }
    
    if (!args[1]) {
      return message.channel.send(`${message.author.username} I need to know partner's member count`)
    }
    
    if (!args[2]) {
      return message.channel.send(`${message.author.username} I need a server invite link so people can join there server`)
    }
    
    if (!args.slice(3).join(" ")) {
      return message.channel.send(`${message.author.userna} I need some nots for my upate `)
    }
    
     if(message.channel.name == 'partner' && !message.author.bot){
   client.guilds.cache.forEach(guild=>{
     if(guild == message.guild) return;
     let channel = guild.channels.cache.find(ch=>ch.name === 'partner');
     if(!channel) return;
     //(!args.slice(0).join(" "))
     //return message.channel.send(`Hey ${message.author.username} you need to add notes dum ass`)
     channel.send("<@&750681815827611736>")
     let embed = new discord.MessageEmbed()
     .setTitle(`${guild.name} is partnering up with... **${args[0]}**`)
     //.setDescription(args.slice(0).join(" "))
     .addFields(
       {name: "There Member Count", 
        value: `${args[1]}`,
       inline: false }, // If you want them inline do true if you don't Want it like that just leave is false
        {name: "Invite Link To The Server", 
        value: `${args[2]}`,
       inline: false },
     { name: "**Notes**", 
      value: args.slice(3).join(" "),
      inline: false },
     ) 
     .setTimestamp()
     .setAuthor(client.user.tag, client.user.displayAvatarURL())
     .setFooter(`Please show are new partners some love and join`)
     channel.send(embed)
   })
 }
    
    }
}