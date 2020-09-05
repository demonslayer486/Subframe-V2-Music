module.exports = {
  name: "say",
  description: "Get the bot to say what ever you want!",
  usage: "<msg>",
  run: async (bot, message, args) => {
     if (message.author.id != "492340582543523840") return message.reply("you do not have permission to use this command!")
      
   /* let MSG = message.content.slice(bot.prefix.length + 2);
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`); */
    await message.delete();
    message.channel.send(args.slice(0).join(" "))
    
   // message.delete();
  }
}