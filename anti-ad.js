/* const Discord = require("discord.js")
module.exports = (client) => {
  const isInvite = async (guild, code) => {
    return await new Promise((resolve) => {
      guild.fetchInvites().then((invites) => {
        for (const invite of invites) {
          if (code === invite[0]) {
            resolve(true)
            return 
          }
        }

        resolve(false)
      })
    })
  }

  client.on('message', async (message) => {
    const { guild, member, content } = message

    // discord.gg/23RAN4
    
    const reason = "Self Promoting in the server SMH"

    //let user = message.author
    let user = message.author;
    
    const code = content.split('discord.gg/')[1]
    console.log('Invite:', code)
let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (!muterole) {
      return message.channel.send(
        "This server do not have role with name `Muted`"
      );
    }

    if (user.roles.cache.has(muterole)) {
      // return message.channel.send("Given User is already muted");
      user.ban
      
    }

    user.roles.add(muterole);

    await message.channel.send(
      `You muted **${
        message.mentions.users.first().username
      }** For \`${reason}\``
    );

    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``);

    
  })
} */