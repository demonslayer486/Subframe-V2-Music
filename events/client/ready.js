const Discord = require("discord.js");

const db = require("quick.db");
module.exports=client=>{

  //client.user.setStatus("idle")
  console.log(`Im in ${client.guilds.cache.size} guilds! and I am serving ${client.users.cache.size} members`)
  console.log(`${client.user.username} is now Online!`)
   console.log(`Bot name:`, client.user.username)
    console.log('Bot Discriminator:', client.user.discriminator)
    console.log('Bot ID:', client.user.id)
    console.log('Guild count:', client.guilds.cache.size)
    console.log('Member count:', client.users.cache.size)
    console.log('channel count:', client.channels.cache.size)
    console.log('Created at:', client.user.createdAt)
    console.log('Status:', client.user.presence.status)
  let status =  db.get(`status`);
  if (status === null) status = `Members!`
 /* client.user.setAvatar(`https://cdn.glitch.com/06e38b37-aedb-4a36-a640-2f57995385b5%2FSubframe%20V2.jpg?v=1595114767634`)
  .then(user => console.log(`New avatar set!`))
  .catch(console.error); 
  Might need at a later date*/
client.user.setPresence({ activity: { name: `$help | ${status}` }, status: 'dnd' })
  .then(console.log)
  .catch(console.error);
  client.channels.fetch('747235036062941246').then((channel) => {
   let embed = new Discord.MessageEmbed()
   .setTitle("") 
   .addFields(
   { name: "Bot Name: ", value: client.user.username, inline: true},
   { name: "Bot Discriminator: ", value: client.user.discriminator, inline: true},
   { name: "Bot ID: ", value: client.user.id, inline: true},
   { name: "Guild count: ", value: client.guilds.cache.size, inline: true},
   { name: "Member count: ", value: client.users.cache.size, inline: true},
   { name: "Channel count: ", value: client.channels.cache.size, inline: true},
   { name: "Created At: ", value: client.user.createdAt, inline: true},
   { name: "Status: ", value: client.user.presence.status, inline: true},
   { name: "First Command Handler: ", value: "Online", inline: true},
   { name: "Second Command Handler: ", value: "Online", inline: true},
   { name: "Third Command Handler: ", value: "Online" , inline: true}
)
    
   channel.send(embed)

  })  
} 

