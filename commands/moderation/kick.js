/* const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, You do not have enough permission to use this command`
      );
    }

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, I do not have enough permission to use this command`
      );
    }

    let target = message.mentions.members.first();

    if (!target) {
      return message.channel.send(
        `**${message.author.username}**, Please mention the person who you want to kick`
      );
    }

    if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, You can not kick yourself`
      );
    }

    if (!args[1]) {
      return message.channel.send(
        `**${message.author.username}**, Please Give Reason to kick`
      );
    }

    let embed = new discord.MessageEmbed()
      .setTitle("Action: Kick")
      .setDescription(`Kicked ${target} (${target.id})`)
      .setColor("#ff2050")
      .setFooter(`Kicked by ${message.author.username}`);

    message.channel.send(embed);

    target.kick(args[1]);
    
    let chch = client.channels.cache.get("730828953668812883");//channel id
   let Embed = new discord.MessageEmbed()
.setTitle(`${message.author.tag} used say command`)
.setDescription(`${message.content}`)
.setColor('RANDOM')
.setFooter('This is footer xD')
chch.send(Embed)
  }
};
*/

const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "kick",
  aliases: null,
  category: "moderation",
  description: "Kick A Member!",
  usage: "Kick <Mention Member>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Please Mention A Member That You Want To Kick!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Please Mention A Valid Member!`);


    if (Member.id === message.author.id)
      return message.channel.send(`You Can't Kick Your Self!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Please Don't Kick Me ;-;`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`You Can't Kick Owner Of Server!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);
    
    let BotRole = message.guild.member(message.guild.me).roles.highest.position;
    
    let Role = User.roles.highest.position;
    
    let UserRole = message.member.roles.highest.position;
    
    if (UserRole <= Role) return message.channel.send(`I Can't Kick That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As You!`);
    
    if (BotRole <= Role) return message.channel.send(`I Can't Kick That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As Me!`);
    
    if (!User.kickable) return message.channel.send(`I Can't Kick That Member!`)

    try {
      console.log(`Member Is Going To Get Kick!`);

      setTimeout(function() {
        User.kick({ reason: `${Reason || "No Reason Provided!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor()
        .setTitle(`Member Kicked!`)
        .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`Kicked Member`, `${Member.tag} (${Member.id})`)
        .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `You Have Been Kicked From **${message.guild.name}** For ${Reason ||
            "No Reason Provided!"}`
        );
      message.channel.send(embed);
      console.log(`User: ${Member.tag} (${Member.id}) Just Got Kicked From ${message.guild.name} For ${Reason || "No Reason Provided!"}`)
    } catch (error) {
      return message.channel
        .send(
          `I Can't Kick That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!`
        )
        .then(() => console.log(error));
    }

    //End
  }
};