const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
    name: "ticket",
    description: "makes you UNAFK",
   category: "Server_Support",
  run: async(client, message, args)=>{
    const reason = args.join(" ")
    
    ticket.makeTicket(message, reason)
     await message.delete();
  }
}