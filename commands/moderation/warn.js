const { MessageEmbed } = require("discord.js");
const warns = require("../../models/warns");
module.exports = {
  name: "warn",
  description: "Warn a user",
  category: "moderation",
  usage: "<User mention> <Reason>",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        `I'm sorry ${message.author.username} but you need **MANAGE_MESSAGES** to run this command!`
      );
    }    
    let user = message.mentions.users.first();
    if (!user) return message.channel.send(`You did not mention a user!`);
    if (!args.slice(1).join(" "))
      return message.channel.send(`You did not specify a reason!`);
    warns.findOne(
      { Guild: message.guild.id, User: user.id },
      async (err, data) => {
        if (err) message.channel.send(err);
        
        if (message.author.id === user.id) {
          
          await message.delete(); 
        
        let Embed = new MessageEmbed()
        .setTitle(`**ERROR** warn failed`)
        .setDescription(`I'm sorry ${message.author.username} but you failed to warn the your self nice try though!`)
        return message.channel.send(Embed)
          
     // return message.channel.send("You can not warn yourself -_-");
    } 
          
          if (user.id === message.guild.owner.id) {
            await message.delete(); 
        
        let embed = new MessageEmbed()
        .setTitle(`**ERROR** warn failed`)
        .setDescription(`I'm sorry ${message.author.username} but you failed to warn the owner nice try though!`)
        return message.channel.send(embed) 
     /** return message.channel.send(
        "You jerk, how you can warn server owner -_-"
      ); */
   } 
        
       let WArn = new MessageEmbed()
      .setTitle(`You have been warned in **${message.guild.name}**`)
      .setDescription( args.slice(1).join(" "))
        //.setFooter(`This is your ${data.Warns.length} warning`)
        .setTimestamp()
        user.send(WArn)
        
        if (!data) {
          let newWarns = new warns({
            User: user.id,
            Guild: message.guild.id,
            Warns: [
              {
                Moderator: message.author.id,
                Reason: args.slice(1).join(" "),
              },
            ],
          });
          
          
          newWarns.save();
          
                      await message.delete(); 
          
          let warn = new MessageEmbed()
        .setTitle(`${message.author.username} has successfully warned ${user.username}`)
        .setDescription(
            `${user.tag} has been warned with the reason of **${args
              .slice(1)
              .join(" ")}**. They now have 1 warn.`
          );
         message.channel.send(warn)
          
         /** message.channel.send(
            `${user.tag} has been warned with the reason of ${args
              .slice(1)
              .join(" ")}. They now have 1 warn.`
          ); */
          

          
        } else {
          data.Warns.unshift({
            Moderator: message.author.id,
            Reason: args.slice(1).join(" "),
          });
          

          data.save();
          
          await message.delete(); 
          
          let Warn = new MessageEmbed()
        .setTitle(`${message.author.username} has successfully warned ${user.username}`)
        .setDescription(
            `${user.tag} has been warned with the reason of **${args
              .slice(1)
              .join(" ")}**. They know have ${data.Warns.length} warns.`
          );
         message.channel.send(Warn)
          
          
          
                   /** message.channel.send(
            `${user.tag} has been warned with the reason of ${args
              .slice(1)
              .join(" ")}. They know have ${data.Warns.length} warns.`

          ); */      
        }
      }
    );
  },
};