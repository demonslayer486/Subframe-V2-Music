const { Random } = require("something-random-on-discord")
const random = new Random();

const Discord = require("discord.js");

module.exports = {
    name: "punch",
    category: "random",
    description: "Sends a user a dm",
    usage: "ping",
    run: async (client, message, args) => {
      
      let data = await random.getAnimeImgURL("punch")
      message.channel.send(data)
      
    }
  

}