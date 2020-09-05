const discord = require("discord.js")
const db = require("quick.db")
 
module.exports = {
    name: "user-profile",
    aliases: ["profile", 'userprofile', "up"], //make sure aliases aren't the same as other commands name
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        let badges = db.get(`badge_${user.id}_${user.id}`)
        let embed = new discord.MessageEmbed()
        .setTitle(`${user.username}'s profile`)
        .addFields({name: "Bot badges" , value: badges.join('\n')}) // Let's just take user badges for now but you cane add here other info like xp on server
        
         message.channel.send(embed)
 
    }
}