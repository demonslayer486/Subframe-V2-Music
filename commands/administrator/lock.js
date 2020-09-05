const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "lock",
    category: "moderation",
    run: async (client, message, args) => {
      
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("you do not have permission to use this command!")

      
      const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: false,
                    EMBED_LINKS: false,
                    READ_MESSAGE_HISTORY: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            
          let embed = new MessageEmbed();
 
        embed.setTitle("")
        embed.setDescription("")
        embed.setColor("RANDOM") 
        embed.setImage('https://i.pinimg.com/originals/91/08/1c/91081c9938decfa7215736bd0d03ac23.gif')
        embed.setFooter(`${message.author.username} Has desiged to put everyone under LOCKDOWN!`);
        embed.setTimestamp()
        return message.channel.send(embed); 
          
          
          
          
          //return message.channel.send('https://i.pinimg.com/originals/91/08/1c/91081c9938decfa7215736bd0d03ac23.gif');
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true,
                    READ_MESSAGES: true,
                    EMBED_LINKS: true,
                    READ_MESSAGE_HISTORY: true
                }).then(() => {
                        channel.setName(channel.name.replace('🔒', ''))
                    }
                )
            })
            return message.channel.send('unlocked all channels, I think its time to come out now')
        }
    }
}