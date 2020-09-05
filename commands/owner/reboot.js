const Discord = require("discord.js")
module.exports = {
  name: "reboot",
  category: "info",
  description: "Get the stats of corona",
  usage: "corona all or corona <country>",
  run: async (client, message, args) => {
    if (message.content.startsWith(`$reboot`)) {
      let devs = ["492340582543523840", "445523810788179969"]; 
      if (!devs.includes(message.author.id)) {
        return message.channel.send(
          "Only developers can execute the `reboot` command!"
        );
      } else {
       // return 
        message.channel.send(":white_check_mark: Rebooting...").then(msg => {
       
          const _ = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setDescription(`I have done rebooting`)
        .setColor("");
      msg.edit(_);
      //msg.edit();
          
          process.exit();
        console.log(`Rebooted by ${message.author.tag}!`);
      
        })
      
        
        
      }
    }
  }
}