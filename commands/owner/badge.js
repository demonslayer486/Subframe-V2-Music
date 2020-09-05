const discord = require('discord.js') //npm i discord.js
const db = require('quick.db') //npm i quick.db
const { OwnerID } = require('../../config.json') //type your id in config for example mine is "404374360246321153"
    module.exports = {
    name: 'badge',
    run: async (client, message, args) => {
        if(message.author.id !== OwnerID) return message.channel.send("That's a big no no for you, you're not my owner") //check if message author is owner of bot, we don't want others to use this command am I right?
         let user = message.mentions.users.first()  //finds user 
         if(!user) return message.channel.send("Ummm... Master you forgot to mention user") //chceck if you actually provided anyone or if bot couln't find this user
         let userCheck = client.users.cache.find(x => x.id !== user.id)
        if(!userCheck) return message.channel.send("This user doesn't exist!!")      
         //Now some args to add specified user profile badges(on your bot)
         //I used these 3 (dev, support, owner) as a examples
         if(args[1] === "dev") {
             let has = db.get(`devBadge_${user.id}`) //check if user have badge already
             if(has !== null) return message.reply(" Sorry but it looks like this user already have this badge :P")
             db.push(`badge_${user.id}_${user.id}`, "💻 - Developer") //add badge to user badge list
             db.set(`devBadge_${user.id}`, 1) //set that user have badge
             let howMany = db.get(`bot_badges_${user.id}`) //check how many badges user have  
             await message.channel.send("User now have " + howMany.length + " badges") //tell how many badges user have :D
         }
         //now just repeat code two more times and we can go check it
         if(args[1] === "support") {
            let has = db.get(`supportBadge_${user.id}`) //check if user have badge already
            if(has !== null) return message.reply(" Sorry but it looks like this user already have this badge :P")
            db.push(`badge_${user.id}_${user.id}`, "🆘 - Support") //add badge to user badge list
            db.set(`supportBadge_${user.id}`, 1) //set that user have badge
            let howMany = db.get(`bot_badges_${user.id}`) //check how many badges user have  
            await message.channel.send("User now have " + howMany.lenght + " badges") //tell how many badges user have :D
         }
         if(args[1] === "owner") {
            let has = db.get(`ownerBadge_${user.id}`) //check if user have badge already
            if(has !== null) return message.reply(" Sorry but it looks like this user already have this badge :P")
            db.push(`badge_${user.id}_${user.id}`, "👑 - Owner") //add badge to user badge list
            db.set(`ownerBadge_${user.id}`, 1) //set that user have badge
            let howMany = db.get(`bot_badges_${user.id}`) //check how many badges user have  
            await message.channel.send("User now have " + howMany.lenght + " badges") //tell how many badges user have :D
         }
 
      if(args[1] === "mimikyu") {
            let has = db.get(`mimikyuBadge_${user.id}`) //check if user have badge already
            if(has !== null) return message.reply(" Sorry but it looks like this user already have this badge :P")
            db.push(`badge_${user.id}_${user.id}`, " 👻 - mimikyu") //add badge to user badge list
            db.set(`mimikyuBadge_${user.id}`, 1) //set that user have badge
            let howMany = db.get(`bot_badges_${user.id}`) //check how many badges user have  
            await message.channel.send("User now have " + howMany.lenght + " badges") //tell how many badges user have :D
         }    
      
      if(args[1] === "nuke") {
            let has = db.get(`nukeBadge_${user.id}`) //check if user have badge already
            if(has !== null) return message.reply(" Sorry but it looks like this user already have this badge :P")
            db.push(`badge_${user.id}_${user.id}`, " 🔓 - Nuke") //add badge to user badge list
            db.set(`nukeBadge_${user.id}`, 1) //set that user have badge
            let howMany = db.get(`bot_badges_${user.id}`) //check how many badges user have  
            await message.channel.send("User now have " + howMany.lenght + " badges") //tell how many badges user have :D
         } 
}
    }