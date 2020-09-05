const discord = require("discord.js")
const { OwnerID } = require('../../config.json')

module.exports = {
  name: "update",
  category: "info",
  description: "Get the stats of corona",
  usage: "corona all or corona <country>",
  run: async (client, message, args, guild ) => {
    
   // args.slice(0).join(" ");
    
    if(message.author.id !== OwnerID) return message.channel.send(`I am sorry ${message.author.username} but only the Owner of this bot can use this command`)
    

    if (!args[0]) {
      return message.channel.send(`${message.author.username} I need to know if its a \`Minor\` or \`Mega\` update. Then you need to say \`Whats new:\`. Note i can't figger now how it works`)
    }
    
    if (!args.slice(1).join(" ")) {
      return message.channel.send(`${message.author.userna} I need some nots for my upate `)
    }
    
     if(message.channel.name == 'update' && !message.author.bot){
   client.guilds.cache.forEach(guild=>{
     if(guild == message.guild) return;
     let channel = guild.channels.cache.find(ch=>ch.name === 'update');
     if(!channel) return;
     //(!args.slice(0).join(" "))
     //return message.channel.send(`Hey ${message.author.username} you need to add notes dum ass`)
     
     let embed = new discord.MessageEmbed()
     .setTitle(`${client.user.username} Updates ✉️`)
     //.setDescription(args.slice(0).join(" "))
     .addFields(
       {name: "**Update Type**", 
        value: `${args[0]}\n`,
       inline: false }, // If you want them inline do true if you don't Want it like that just leave is false
     { name: "**Notes**", 
      value: "So whats new?\n" + args.slice(1).join(" "),
      inline: false },
      { name: "**My Notes**",
        value: `${client.user.username} is being controlled by a dum ass`,
        inline: false }
     
     ) 
     .setTimestamp()
     .setAuthor(client.user.tag, client.user.displayAvatarURL())
     .setFooter(message.author.tag , message.author.displayAvatarURL())
     channel.send(embed)
   })
 }
    
    }
}