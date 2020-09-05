const { formatDate } = require("../../functions");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "youngest",
  category: "info",
  description: "Get the youngest account creation date in the guild!",
  run: async (bot, message, args) => {
    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => b.user.createdAt - a.user.createdAt)
      .first();
    const Embed = new MessageEmbed()
      .setTitle(`The youngest member in ${message.guild.name}`)
      .setColor(`BLACK`)
      .setFooter(`Date format: MM/DD/YYYY`)
      .setDescription(
        `${mem.user.tag} is the youngest user in ${
          message.guild.name
        }! Account creation date: ${formatDate(mem.user.createdAt)}`
      );
    await message.delete(); 
    message.channel.send(Embed);
  },
};