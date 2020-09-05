const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "reddit",
  description: "Get a meme from a subreddit of your choice!",
  category: "fun",
  usage: "<subreddit>",
  run: async (bot, message, args) => {
    let Subreddit = message.content.slice(8);
    if (!Subreddit)
      
      //await message.delete();
      {
        const embed = new MessageEmbed() 
        .setTitle(`**ERROR**`)
        .setDescription(`${message.author.tag} you didn't mention a Subreddit`)
      message.channel.send(embed);
       await message.delete();
      //return message.channel.send(`You did not specify your subreddit!`);
  
        } else {
      let img = await api(Subreddit, true);
      await message.delete(); 
      const Embed = new MessageEmbed()
        .setTitle(`A random image from r/${Subreddit}`)
        .setColor("")
        .setImage(img)
        .setURL(`https://reddit.com/r/${Subreddit}`);
      message.channel.send(Embed);
    }  
  } 
};