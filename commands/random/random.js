//  getAdvice

const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
    name: "advice",
    category: "random",
    description: "Sends a user a dm",
    usage: "ping",
    run: async (client, message, args) => {
      
      let data = await random.getAdvice()
      message.channel.send(data)
      
    }
}