 const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
    name: "ticket-close",
    description: "makes you UNAFK",
   category: "Server_Support",
  run: async(client, message, args)=>{
    const channel = message.mentions.channels.first() || message.channel
    
    ticket.closeTicket(message, channel)

  }
}