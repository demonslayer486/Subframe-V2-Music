const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'hentai69',
  description: 'Send A Hentai Gif Lol',
  usage: '[Prefix]hentai',
  category: 'nsfw',
  run: async (client, message, args) => {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/Random_hentai_gif`
    );

   if (message.channel.nsfw == false) {
 const Embed = new MessageEmbed()
        .setTitle("**ERROR**")
        .setDescription("Sorry but you need to turn on **NSFW CHAT!**")
        .setColor("RED") 
        .setImage("https://cdn.glitch.com/9365b8d3-b106-4ee1-bec1-7ff5a120571d%2FB407FDA9-E9C7-46D5-A9D6-ACCABDF9CE24.gif?v=1595584560852")
    message.channel.send(Embed)
     
   } else {
     
    let hentaiEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Take Your Hentai Gif Sir!')
      .setImage(body.url)
      .setFooter(`Tysm For Using Me! ${message.author.username}`);

    message.channel.send(hentaiEmbed);
  
   }
}
}
