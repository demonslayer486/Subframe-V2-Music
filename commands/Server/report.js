 const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "report",
  category: "moderation",
  description: "Report a user of your choice!",
  usage: "<User mention>",
  run: async (bot, message, args) => {
    
       let User = message.mentions.users.first() || null;
    
   
    /*if (User.id == true) {
      
      return message.channel.send("the report has been closed ") 
      
    } else { */
   
    
 // if (content.includes['']){
  
       // let User = message.mentions.users.first() || null;

    if (User == null) {
     
      await message.delete(); 
        
        let EMbed = new MessageEmbed()
        .setTitle(`**ERROR** Report failed`)
        .setDescription(`I'm sorry ${message.author.tag} but you failed to mention a user!`)
        return message.channel.send(EMbed)
      
      // return message.channel.send(`You did not mention a user!`);
    } else {
      let Reason = message.content.slice(bot.prefix.length + 3 + 1) || null;
      if (Reason == null) {
     
         await message.delete(); 
        
        let embed = new MessageEmbed()
        .setTitle(`**ERROR** Report failed`)
        .setDescription(`I'm sorry ${message.author.username} but you failed to give a reason!`)
        return message.channel.send(embed)
        
        /**   return message.channel.send(
          `You did not specify a reason for the report!`
        );
      */ } 
    
      let Avatar = User.displayAvatarURL();
      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "reports"
      );
      if (!Channel) {
        
        await message.delete(); 
        
        let error = new MessageEmbed()
        .setTitle(`**ERROR** Report failed`)
        .setDescription(`I'm sorry ${message.author.username} please can you contact staff becuase I cant find a channel called \`repports\``)
        return message.channel.send(error)
      }
       /** return message.channel.send(
          `There is no channel in this guild which is called \`reports\``
          
        ); */
    
      
      let Embed = new MessageEmbed()
        .setTitle(`New report!`)
        .setDescription(
          `The moderator \`${message.author.tag}\` has reported the user \`${User.tag}\`! `
        )
        .setColor(`RED`)
        .setThumbnail(Avatar)
        .addFields(
          { name: "Reporters ID", value: `${message.author.id}`, inline: true },
          { name: "Reporters Username", value: `${message.author.tag}`, inline: true },
          { name: "Reported ID", value: `${User.id}`, inline: true },
          { name: "Reported Tag", value: `${User.tag}`, inline: true },
          { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: true },
          {
            name: "Date (M/D/Y)",
            value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
            inline: true,
          } 
        ) 
      .setFooter('If you think they need looking into press ✅ to look into it. If not press ❌ if you think its right'); 
      Channel.send(Embed).then(m => {
      m.react('739241767932788746')
      m.react('739241827017818203')
    })
      await message.delete(); 
      
      
  
         
       let embed = new MessageEmbed()
    .setAuthor("Report Has Been Sent!")
    .setColor("")
    .setDescription(`Your Report Into ${User.tag} has been sent`)
    .setFooter("We do like to remind Users to not anbuse this command because it is punishable!")
    .setTimestamp()
    
    
    message.author.send(embed).then(r => {
      r.react('739241767932788746')

    
    
      }
    )} 
   }
  } 


// ✅❌

/**
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "lock",
    category: "moderation",
    run: async (client, message, args) => {
      
      if (message.author.id != "492340582543523840") return message.reply("you do not have permission to use this command!")

      
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
*/