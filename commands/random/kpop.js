// getString

const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
    name: "kpop",
    category: "random",
    description: "Sends a user a dm",
    usage: "ping",
    run: async (client, message, args) => {
      
      let data = await random.getKpop()
      message.channel.send(data)
      
    }
}