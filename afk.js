const discord = require("discord.js");
const AFKD = require("../../models/afk");
 
module.exports = {
    name: 'afk',
    category: 'moderation',
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send("Please provide a reason.");
        await AFKD.findOne({
            ID: message.author.id
        }, (err, data) => {
            if (err) throw err;
            if (!data) {
                const newD = new AFKD({
                    ID: message.author.id,
                    AFK: true,
                    Reason: args.join(" ")
                });
                return newD.save();
            }
            data.AFK = true;
            data.Reason = args.join(" ")
            data.save();
        });
        return message.reply(`You are now AFK. Reason: ${args.join(" ")}.`);
    }
}