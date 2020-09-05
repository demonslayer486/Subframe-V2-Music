const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "hunter-sysboty", // Change the Command Nmae
  description: "There is a big chance I insult you!",
  category: "verify",
   aliases: [],
  run: async (client, message, args) => {
    
    message.member.roles.add("749969197035028500")
  //  message.member.roles.remove("747239037282287708")
      .then(
    ).catch(err => console.log(err))
  
  await message.delete();
    
    const embed = new MessageEmbed()
     .setTitle("")  
    .setDescription(`Dear ${message.author.tag} you have **Accepted** the **SYSBOT RULES** We do like to remind Users that if you break a rule you will be punished`)
     
    message.author.send(embed);
    
  }
}