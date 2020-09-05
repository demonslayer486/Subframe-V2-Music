const Discord = require("discord.js")
const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
    name: "neko",
    category: "random",
    description: "Sends a user a dm",
    usage: "ping",
    run: async (client, message, args) => {
 
if (message.channel.nsfw == false) {
 const Embed = new Discord.MessageEmbed()
        .setTitle("**ERROR**")
        .setDescription("Sorry but you need to turn on **NSFW CHAT!**")
        .setColor("RED") 
        .setImage("https://cdn.glitch.com/9365b8d3-b106-4ee1-bec1-7ff5a120571d%2FB407FDA9-E9C7-46D5-A9D6-ACCABDF9CE24.gif?v=1595584560852")
    message.channel.send(Embed)      
     
} else {
      
      let data = await random.getNeko()
      message.channel.send(data)
      
    }
}
}