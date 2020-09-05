const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const EmbedColor = "RANDOM";
const ErrorMessage = `Error In Creating Poll | Please Try Again Later!`;
const ErrorEmbedColor = "RED";
const Poll_Emoji_1 = "726197223867809866";
const Poll_Emoji_2 = "739574021527568394";
const Poll_Emoji_3 = "739241827017818203";
const Prefix = "$";

module.exports = {
  name: "poll",
  description: "Creates A Poll",
  aliases: [""],
category: "moderation",
  usage: "Poll <Message>",
  example: "Poll Nitro Giveaway?",
  run: async (client, message, args) => {
    try {
      const Embed = new MessageEmbed()
        .setColor(`${EmbedColor}`)
        .setTitle("Poll Information!")
        .setDescription(
          `${Prefix}Poll <Message> To Create A Simple Yes Or No Poll!`
        )
        .setFooter(`Command Requested By : ${message.author.username}`)
        .setTimestamp();

      if (args.length === 0) {
        return message.channel.send(Embed);
      }

      let Message = args.slice(0).join(" ");

      let Poll = await message.channel.send(
        new MessageEmbed()
          .setColor(`${EmbedColor}`)
          .setDescription(`📋 ${Message}"`)
          .setFooter(`Poll Created By : ${message.author.username}`)
          .setTimestamp()
      );

      await Poll.react(`${Poll_Emoji_1}`);
      await Poll.react(`${Poll_Emoji_2}`);
      await Poll.react(`${Poll_Emoji_3}`);
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