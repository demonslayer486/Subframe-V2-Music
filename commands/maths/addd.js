const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "addd",
  description: "There is a big chance I insult you!",
  category: "maths",
  requiredRoles: ['John'],
  run: async (bot, message, args) => {

    const num1 = + args[0]
    const num2 = + args[1]

    /* const Embed = new MessageEmbed()
        .setTitle(`The sum is ${num1 + num2}`)
        message.reply(Embed) */
message.reply(`The sum is ${num1 + num2}`)    
    
  }
}