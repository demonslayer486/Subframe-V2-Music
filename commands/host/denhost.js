const Discord = require('discord.js');
module.exports = {
    name: "denhost",
    category: "host",
    description: "Sends a user a dm",
    usage: "Pokemon Raids",
  category: "Pokemon Raid",
    run: async (client, message, args) => {
       {
            if (message.member.roles.cache.some(r => r.name === "Host") || (r => r.name === "Developer"))
            {
       const Embed = new Discord.MessageEmbed()     
            .setColor('#c842f5')
            .setTitle('Rotating Den Host')
            .setThumbnail(message.author.displayAvatarURL())
            .setImage(`https://github.com/lbbooga/lbbooga.github.io/raw/master/den_images/den_${args[1]}.png`)
            .addFields(
              {name: 'Hosted By:', value: message.author, inline: true},
              {name: 'in room:', value: `${args[6]}`},
              {name: 'Den:', value: `${args[1]}`},
              {name: 'IV Spread', value: `${args[2]}`},
              {name: 'Gender', value: `${args[3]}`, inline: true},
              {name: 'Nature',value: `${args[4]}`, inline: true},
              {name: 'Ability', value: `${args[5]}`, inline: true},
              {name: 'General Raid Rules:', value: 'Please keep bot commands to the relevant channels. If you will not be coming back to raids for a while, then please remove the host from your friends list; No dynamaxing!'}
              )
            .setFooter('Don\'t forget to say thank you to the host');
           message.channel.send(Embed)
            } else {
            message.reply("You don't have permission to do that!")
          }
       }
    }
}