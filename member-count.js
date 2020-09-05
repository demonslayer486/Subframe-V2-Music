module.exports = (client) => {
  const channelId = '748370107339898933'

  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
  }

  // ${guild.memberCount.toLocaleString()}
  
  client.on('guildMemberAdd', (member) => updateMembers(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers(member.guild))

  const guild = client.guilds.cache.get('736353883336736849')
  updateMembers(guild)
} 