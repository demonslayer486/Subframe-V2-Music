const warns = require("../../models/warns");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "warns",
  description: "Get a user's warns in the guild!",
  category: "moderation",
  aliases: ["warnings", "Warns"],
  usage: "<User mention>",
  run: async (bot, message, args) => {
   if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        `I'm sorry ${message.author.id} but you need **MANAGE_MESSAGES** to run this command!`
      );
    }    
    let user = message.mentions.members.first();
    if (!user) return message.channel.send(`No user specified!`);
    warns.find(
      { Guild: message.guild.id, User: user.user.id },
      async (err, data) => {
        if (err) console.log(err);
        if (!data.length)
          return message.channel.send(
            `**${user.user.tag}** has not got any warns in this guild!`
          );
        let Embed = new MessageEmbed()
          .setTitle(`${user.user.tag}'s warns in ${message.guild.name}.. `)
          .setDescription(
            data.map((d) => {
              return d.Warns.map(
                (w, i) =>
                  `${i} - Moderator: ${
                    message.guild.members.cache.get(w.Moderator)//.user.tag
                
                  } Reason: ${w.Reason}`
              ).join("\n");
            })
          );
        message.channel.send(Embed);
      }
    );
  },
};
