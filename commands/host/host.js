module.exports = {
        name: 'host',
        description: 'Relocks Perms for hosting room',
category: "Pokemon Raids",
  execute(message)

        {
            const channel = message.channel;
            let host = (message.guild.roles.cache.find(r => r.name === 'Host') || (r => r.name === "Developer"));
            if (message.member.roles.cache.some(r => r.name === "Host") || (r => r.name === "Developer"))
            {
                channel.lockPermissions()
            }
            else {
              message.reply("You don't have permission to do that!")
            }
        }};