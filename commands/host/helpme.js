const Discord = require('discord.js');
module.exports = {
    name: "helpme",
    category: "host",
    description: "Sends a user a dm",
    usage: "Pokemon Raids",
  category: "Pokemon Raid",
    run: async (client, message, args) => {
       {
            if (message.member.roles.cache.some(r => r.name === "Host") || (r => r.name === "Developer"))
            {
       const Embed = new Discord.MessageEmbed()     
            .setColor('#00A6FF')
            .setTitle('List of functions for Thundurus-BOT')
            .setDescription('Currently all commands are locked from non-hosts')
            .addFields
            (
              {name: 'Prefix', value: '$'},
              {name: 'denhost', value: 'Format for this command is: {@RaidPings} {"Promo" or Den#, such as "123"} {IVs, in XX/XX/XX/XX/XX/XX format if its 1/9 put a 0 infront} {Gender} {Nature} {Ability} {#channel} {game}'},
              {name: 'monhost', value: 'Format for this command is: $monhost @RaidPings {pokemon name all lowercase, put form in after - ex: "darmanitan-galar-zen"} {IVs, in XX/XX/XX/XX/XX/XX formatif its 1/9 put a 0 infront} {Gender} {Nature} {Ability} {#channel} {game}'},
              {name: 'host', value: 'resyncs the room permissions with parent category to make it viewable'},
              {name: 'stophost', value: 'makes the room unviewable by users without the Host Role'}
            )
            .setFooter('Here is your help');
           message.channel.send(Embed)
            } else {
            message.reply("You don't have permission to do that!")
          }
          }}
          }

// if (!message.member.permissions.has("MANAGE_MESSAGES"))
      //return message.channel.send("You do not have enough permissions!");