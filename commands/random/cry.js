const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
    name: "cry",
    category: "random",
    description: "Sends a user a dm",
    usage: "ping",
    run: async (client, message, args) => {
      
      let data = await random.getAnimeImgURL("cry")
      message.channel.send(data)
      
    }
  

}