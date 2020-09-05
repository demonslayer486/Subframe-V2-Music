/* const Discord = require("discord.js")
const ownerId = '492340582543523840' // my discord user ID
const channelId = '748356103179599962' // private channel ID

 
 module.exports = {
  name: "eval",
  category: "owner",
  run: async (client, message, args) => {
 
    const { member, channel, content } = message

    if (member.id === ownerId && channel.id === channelId) {
      const result = eval(content.replace('$eval ', ''))
      channel.send(result)
    }

  }
 }

*/

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'eval',
    run: async (client, message, args) => {
        if (message.author.id !== '492340582543523840') return;
        const embed = new MessageEmbed()
            .setTitle('Evaluating...')
        const msg = await message.channel.send(embed);
        try {
            const data = eval(args.join(' ').replace(/```/g, ''));
            const embed = new MessageEmbed()
                .setTitle('Output: ')
                .setDescription(await data)
            await msg.edit(embed)
            await msg.react('✅')
            await msg.react('❌')
            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '✅':
                                msg.reactions.removeAll();
                                break;
                            case '❌':
                                msg.delete()
                                break;
                        }
                    })
                })
        } catch (e) {
            const embed = new MessageEmbed()
                .setTitle('An Error has occured')
                .setDescription(e)
            return await msg.edit(embed);

        }
    }
}