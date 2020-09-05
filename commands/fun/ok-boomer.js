const Discord = require('discord.js');


module.exports = {
  name: "ok-boomer",
  description: "There is a big chance I insult you!",
  category: "fun",
 run: async (client, message, args) => {

var list = [
  'https://tenor.com/view/ok-boomer-the-office-old-man-michael-scott-gif-15530652',
        'https://tenor.com/view/ok-boomer-thumbs-up-kylo-ren-undercover-ren-snl-gif-16153766',
        'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('remember to mention a valid user to ok boomer!');
}
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Boomer')
        .setColor('#000000')
        .setDescription(`${message.author} has Ok Boomer ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Ok Boomer')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
}