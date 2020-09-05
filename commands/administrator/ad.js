const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "ad",
  description: "Advertise your server",
  category: "fun",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You do not have admin, ${message.author.username}`
      );
    let Str = args.slice(0).join(" ");
    if (!args[0])
      return message.channel.send(`You did not specify your advert!`);
 
    bot.channels.cache
      .get('747235111271006259')
      .send( "@everyone",
        new MessageEmbed()
          .setThumbnail('https://cdn.glitch.com/06e38b37-aedb-4a36-a640-2f57995385b5%2FSubframe%20V2.jpg?v=1595114767634')
          .setTitle(`New advertisement from an Admin!`)
          .setDescription(Str)
          .setColor(`BLUE`)
      
      );
    
  },
};
//!ad then your messa.ge....
//668559422687281203

// i have  if (!message.member.permissions.has("ADMINISTRATOR")) but im wanting to set roles pomissisons 