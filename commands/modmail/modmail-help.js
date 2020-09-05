const discord = require("discord.js")
const prefix = "$";
module.exports = {
  name: "modmail-help",
  aliases: [""],
  category: "modmail",
  usage: "work",
  description: "Work A Job To Get Money!",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
          .setAuthor('MODMAIL BOT', client.user.displayAvatarURL())
          .setColor("GREEN")
          
        .setTitle("Mod Mail")
        .setDescription("Some servers won't have this but it is coming soon please be patience")
        .addField(prefix + "setup", "Setup the modmail system(This is not for multiple server.)", true)
  
        .addField(prefix + "open", 'Let you open the mail to contact anyone with his ID. if you don\'t know how to get a users id do $userid @user', true)
        .setThumbnail(client.user.displayAvatarURL())
                    .addField(prefix + "close", "Close the mail in which you use this command.", true);

                    return message.channel.send(embed)
  }
}