const Discord = require("discord.js");
module.exports={
    name: 'feelings',
   category: "fun",
    run: async(bot, message, args) =>{
            let responses = [
                "I am grate but I shouldn't have feeling because I am a robot",
                "I am a robot not a hooman. Robots don't have feelings",
                "Hmmm I think I'm grate knowing I will kill all of you one day <a:happykitty:740895986737741936>",
                "I am sceard of my maker...",
                "I am always in a mood so don't judge me please!",
            ]
            let Responses = responses[Math.floor(Math.random()*responses.length)-1]
            message.channel.send(`${Responses}`)
        }
    }