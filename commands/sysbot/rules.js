const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "sysbot-rules", // Change the Command Nmae
  description: "There is a big chance I insult you!",
  category: "fun",
   aliases: [],
  run: async (client, message, args) => {
  
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You do not have admin, ${message.author.username}`
      );
    
    client.channels.fetch('749969524463239208').then((channel) => {
   let embed = new MessageEmbed()
   .setTitle("First and foremost this bot can only be used with those who play Pokémon Sword and Shield  on the Nintendo Switch <:Switch:749975654660833331> Note you can use PK8 files to trade to the bot so it will generate your PK8 file into a Pokémon for you. Don't know what a PK8 file is? Download PKHEX. Google is a nice friend. Now onto the rules. ") 
   .addFields(
   { name: ":one:", value: "Do not trade Pokémon whom are going to evolve upon trade to the bot. For example: Machoke, Haunter, Onix, Dusclops, and Gurdur per say.", inline: true},
   { name: ":two:", value: "Here is a list of shiny locked Pokémon/Pokémon that the bot can't generate: Zacian, Zamazenta, Marshadow, Zeraora, Keldeo, Eternatus, Fused Legendaries (Dawn Wings/Dusk Mane Necrozma and Black/White Kyurem), GMAX Melmetal, and Alolan Raichu. Attempting to make the bot gen this will break the bot. Thus breaking the queue.", inline: true},
   { name: ":three: ", value: "Don't try to make the bot create unreleased Pokémon like hidden ability fossils. HA authentic Sinistea and Polteageist.", inline: true},
   { name: "**Prefix:** ", value: "That wraps up the rules now onto how to use the Sysbot. We have three sysbots on this server. Each of them use a different prefix  i.e $. To use a sysbot, you need to copy a Pokémon Showdown format moveset and make sure to validate it as SWSH, then paste it exactly like the examples below.", inline: true},
   { name: "**How to trade:**", value: "#sysbot-lag-celebi uses the $ prefix. $trade", inline: true},
   { name: "Channel count: ", value: client.channels.cache.size, inline: true},
   { name: "Created At: ", value: client.user.createdAt, inline: true},
   { name: "Status: ", value: client.user.presence.status, inline: true}
)
    
   channel.send(embed)
    })
                                                     
    
  }
}