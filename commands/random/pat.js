const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
    name: "pat",
    category: "random",
    description: "Sends a user a dm",
    usage: "ping",
    run: async (client, message, args) => {
      
      let data = await random.getAnimeImgURL("pat")
      message.channel.send(data)
      
    }
  

}