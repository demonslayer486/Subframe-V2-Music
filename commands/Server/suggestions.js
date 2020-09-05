const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "suggestions",
  run: async (client, message, args) => {
    
    if(!args.length) {
      
       await message.delete(); 
      
       let suggest = new MessageEmbed()
          .setDescription(`Hello ${message.author.tag} Please give me your suggestion`)
          return message.channel.send(suggest);
      
      //return message.channel.send("Please Give the Suggestion")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
    
     await message.delete(); 
    if(!channel) {
      
      let Time = new MessageEmbed()
          .setDescription(`**ERROR** ${message.author.tag} Please contact staff beacuse I can't see a channel called suggestion or suggestions`)
          return message.channel.send(Time);
      
      //return message.channel.send("there is no channel with name - suggestions")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("SUGGESTION FROM: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    .setFooter("Some ideas are grate. Some ideas are just stupid so lets see what they put -_- I can see this is a stupid one")
    
    channel.send(embed).then(m => {
      m.react('739241767932788746')
      m.react('739241827017818203')
    })
    
    //await message.delete();
    
 let Embed = new MessageEmbed()
    .setAuthor("Suggestion Sent!")
    .setColor("")
    .setDescription(`Thank you ${message.author.tag} for your suggestion`)
    .setTimestamp()
    
    
    message.channel.send(Embed).then(r => {
      r.react('739241767932788746')
    
    }
    
  )}
}