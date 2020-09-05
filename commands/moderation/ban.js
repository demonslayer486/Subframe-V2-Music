/* const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You do not have perms to ban someone`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, I am do not have perms to ban someone`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Please mention the person who you want to ban.`)
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, You can not ban yourself!`)
    }
    
   
    
   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Please Give Reason To ban Member`)
   }
    
  message.traget.send(`I am soryy ${target.username} but you have been banned in ${message.guild} for ${args[1]}`)
    
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action : Ban")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor("#ff2050")
    .setThumbnail(target.avatarURL)
    .setFooter(`Banned by ${message.author.tag}`);
    
    message.channel.send(embed)
    target.ban(args[1])
    
    
  }
} 
*/

/*
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    aliases: null,
    category: "moderation",
    description: "Ban A Member!",
    usage: "Ban <Mention Member>",
    accessableby: "everyone",
    run: async (client, message, args) => {

        //Start

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`You Don't Have Permission To Use This Command!`);

        let Member = message.mentions.users.first();

        if (!Member) return message.channel.send(`Please Mention A Member That You Want To Ban!`);

        if (!message.guild.members.cache.get(Member.id)) return message.channel.send(`Please Mention A Valid Member!`)

        if (Member.id === message.author.id) return message.channel.send(`You Can't Ban Your Self!`);

        if (Member.id === client.user.id) return message.channel.send(`Please Don't Ban Me ;-;`);

        if (Member.id === message.guild.owner.user.id) return message.channel.send(`You Can't Ban Owner Of Server!`);

        let Reason = args.slice(1).join(" ");

        let User = message.guild.member(Member);

        if (User && Member.bot === false) Member.send(`You Have Been Banned From **${message.guild.name}** For ${Reason || "No Reason Provided!"}`)
            try {
                console.log(`Member Is Going To Get Ban!`).then(msg => {
                    setTimeout(function () {
                    User.ban({ reason: `${Reason || "No Reason Provided!"}` })
                }, 2000)
                let embed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle(`Member Banned!`)
                    .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
                    .addField(`Banned Member`, `${Member.tag} (${Member.id})`)
                    .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
                    .setFooter(`Requested by ${message.author.username}`)
                    .setTimestamp();

                message.channel.send(embed)
                  User.ban
            })} catch (error) {
                return message.channel.send(`I Can't Ban That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!`).then(() => console.log(error));
            };

        //End

    }
};
*/
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  aliases: null,
  category: "moderation",
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Please Mention A Member That You Want To Ban!`
      );
    
    
    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Please Mention A Valid Member!`);


    if (Member.id === message.author.id)
      return message.channel.send(`You Can't Ban Your Self!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Please Don't Ban Me ;-;`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`You Can't Ban Owner Of Server!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);
    
    let BotRole = message.guild.member(message.guild.me).roles.highest.position;
    
    let Role = User.roles.highest.position;
    
    let UserRole = message.member.roles.highest.position;
    
    if (UserRole <= Role) return message.channel.send(`I Can't Ban That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As You!`);
    
    if (BotRole <= Role) return message.channel.send(`I Can't Ban That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As Me!`);
    
    if (!User.bannable) return message.channel.send(`I Can't Ban That Member!`)

    try {
      console.log(`Member Is Going To Get Ban!`);
      setTimeout(function() {
        User.ban({ reason: `${Reason || "No Reason Provided!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor()
        .setTitle(`Member Banned!`)
        .addFields(
        {
          name: `Moderator`,
                    value: `${message.author.tag} (${message.author.id}`,
                    inline: true
        },
        {
          name: `Banned Member`,
                    value: `${Member.tag} (${Member.id})`,
                    inline: true
        },
        {
          name: `Reason`,
                    value: `${Reason || "No Reason Provided!"}`,
                    inline: true
        })
      
      
       /* .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`Banned Member`, `${Member.tag} (${Member.id})`)
        .addField(`Reason`, `${Reason || "No Reason Provided!"}`) */
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      
   // } else {
      if (User && Member.bot === false)
        
       /*Member.send(Ban)
        
        let Ban = new Discord.MessageEmbed()
        .setColor()
        .setTitle(`Member Banned!`)
        .addFields(
        {
          name: `Moderator`,
                    value: `${message.author.tag} (${message.author.id}`,
                    inline: true
        })
        .setTimestamp(); */ 
        // Member.send(Ban)
        
        Member.send(
          `You Have Been Banned From **${message.guild.name}** For ${Reason ||
            "No Reason Provided!"}`
        );  
      message.channel.send(embed);
      console.log(`User: ${Member.tag} (${Member.id}) Just Got Banned From ${message.guild.name} For ${Reason || "No Reason Provided!"}`)
    } 
    catch (error) {
      return message.channel
        .send(
          `I Can't Ban That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!`
        )
        .then(() => console.log(error));
    } 

    //End
  } 
} 