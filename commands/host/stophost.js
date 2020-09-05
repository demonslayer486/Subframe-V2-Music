module.exports = {
    name: 'stophost',
    description: 'Hides room from users with default',
  category: "Pokemom Raids",
    execute(message) {
        const channel = message.channel;
        const defaultRole = message.guild.roles.cache.find(r => r.name === 'default');
        if (message.member.roles.cache.some(r => r.name === "Host"))
            channel.overwritePermissions([{
                id: defaultRole.id,
                deny: ['VIEW_CHANNEL'],
            }, ], 'Lockdown')
    }
};