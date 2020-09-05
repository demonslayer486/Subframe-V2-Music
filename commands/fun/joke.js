const discord = require("discord.js");

module.exports = {
    name: "amiajoke",
    aliases: ["joke"],
    category: "Fun",
    usage: "amiajoke (optional user mention)",
    description: "Makes the \"Am I a Joke\" meme of mentioned user or message author.",
    run: async (client, message, args) => {

   let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({size: 2048, format: "png"}) : message.author.avatarURL({size: 2048, format: "png"})
  let link = `https://api.alexflipnote.dev/amiajoke?image=${avatar}`
  let embed = new discord.MessageEmbed()
  .setColor("RANDOM")
  .setImage(link) 
  message.channel.send(embed);

    }
};