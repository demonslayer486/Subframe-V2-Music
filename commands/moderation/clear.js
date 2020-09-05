const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const EmbedColor = "RANDOM";
const ErrorMessage = `Error In Deleteing Messages | Please Try Again Later!`;
const ErrorEmbedColor = "RED";
const Prefix = "$";

// moderation

module.exports = {
  name: "clear",
  description: "Delete Your Given Amount Messages!",
  aliases: ["delete"],
  usage: "Clear <Messages Amount>",
  example: "Clear 10",
  category: "moderation",
  run: async (client, message, args) => {
    try {

      if (!args[0]) return message.channel.send(`Please Give Me Messages Amount!`);

	  if (isNaN(args[0])) {
            return message.channel.send(`Please Give Me Valid Numbers Value!`);
          }

      if (args[0] > 100) {
            return message.channel.send(
              `I Cannot Delete **${args[0]}** Messages Because Of Discord Api Limit! | Limit : 100`
            );
          }

	  if (message.deletable) {
    message.delete();
  }

  message.channel
    .bulkDelete(args[0], true)
    .then(deleted =>
      message.channel.send(new MessageEmbed()
      .setColor(`${EmbedColor}`)
      .setFooter(`Requested By : ${message.author.username}`)
      .setDescription(`${deleted.size} Messages Has Been Deleted!`)
      .setTimestamp())
    );

      await message.delete();
    } catch (error) {
      console.log(error);
      message.channel.send(
        new MessageEmbed()
          .setColor(`${ErrorEmbedColor}`)
          .setDescription(`${ErrorMessage}`)
          .setFooter(`Sorry For Error!`)
          .setTimestamp()
      );
    }
  }
};