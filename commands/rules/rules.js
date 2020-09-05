const Discord = require("discord.js")

module.exports = {
    name: "rules",
    category: "help",
    description: "Sends a user a dm",
    usage: "ping",
    run: async (client, message, args) => {
     let embed = new Discord.MessageEmbed();
 
        embed.setTitle("Server Rules")
        embed.setDescription("Subframe V2 support Rules:")
        embed.setColor("RANDOM") 
        embed.addField("**1** -", " Use channels for it purpose, example - <#734085406613831710> channel for using commands of bot.")
        embed.addField("**2** -", "Given things are not allowed in this server - `nsfw content, badwords, promotion without permission, rudeness, discrimination, Fake information, Drama, spamming, Disturbing others from helping, Dm Promotion, Abusing, Emoji Spamming, Self Bot, Member underage 13, Raiding.`")
        embed.addField("**3** -", "Please do not ask for codes, It will be alot better if you code by yourself and if you do not want to code then there are some useful websites to make bot without coding.")
        embed.addField("**4** -", "If a moderator warns you, you carry on with it and you just accept it.")
        embed.addField("**5** -", "**Don't beg for help!** This is just plain up annoying. Don't do it'")
        embed.addField("**6** -", "Do **NOT RAID** Riding is an instant ban")
        embed.addField("**7** -", "Do not shear/ask for user's personal infomation. If you ask its an INSTANT ban as it is invasions of people's privacy")
        embed.addField("**8** -", "Sharing content related to minors is not allowed. Doing this will get you instantly banned.")
        embed.addField("**9** -", "NO ADVERTISING. Doing  will get you an INSTANT BAN! With no appeal for an unban")
        embed.addField("**10** -", "**DON'T BE RACIST!** Being racist is an instant ban. This includes saying the N word")
        embed.addField("**11** -", "<#733694451028852826> <#733694451179978892> **are the only help channels**. Asking anywhere else for help is annoying and you will be warned, this is enforce as we have dedicated channels and want to remove unnecessary clutter.")
        embed.addField("**12** -", "Please be polite when getting help. If you are not polite when getting help, it will be a warn")
        embed.addField("**13** -", "No ghost pinging. First time will be a verbial warning. Second time will be a warning")
        embed.addField("**14** -", "No ALT accounts.  If an alt in question joins and we have proof of the account being an alt, you will get banned.")
        embed.addField("**15** -", "No spamming emojis and no seizure enducing emojis. This will be an instant ban as this can be harmful.")
        embed.addField("**16** -", "Please use post bins. If you don't know hoe to get an post bin use $bins")
        embed.addField("**17** -", "Follow Discord Terms and Service - https://discordapp.com/terms"); 
        embed.addField("Did you read all of the rules?", "If you did go to <#733699525125865503> and follow the steps to be a member")
      message.channel.send(embed); }  
    }