/* const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")
const economy = require("../../models/economy")

module.exports = {
  name: "daily",
  aliases: ["d", "Daily", "D"],
  category: "economy",
  usage: "daily",
  description: "Gives You Daily Credits!",
  run: async (client, message, args) => {

    
    
    let amount = 1000
    let timeout = 86400000
    
    let daily = await db.fetch(`daily_${message.author.id}`)
    
    if(daily !== null && timeout - (Date.now() - daily) >0) {
      
      let time = ms(timeout - (Date.now() - daily));
      
      let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle("Daily Command")
      .setDescription(`You Have Already Claimed Your Daily Rewards!\n\nWait: ${time.hours}.Hours ${time.minutes}.Minutes ${time.seconds}.Seconds`)
      .setFooter("Daily Command= Rewards Claimed!")
      
      
      message.channel.send(embed)
      
    } else {
      
      let embed  = new Discord.MessageEmbed()
      
      .setColor('RANDOM')
      .setTitle("Daily Command")
      .setDescription(`You Have Claimed ${amount} Credits! `)
      .setFooter("Daily Command = Claiming Rewards!")
      
      message.channel.send(embed)
  db.add(`credits_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
      
      
    }
    
  }
} */
 const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
const economy = require("../../models/economy")

//if(data.WorkCooldown > 0)

const DAILY_COOLDOWN_MS = 86400000 ;

module.exports = {
  name: "daily",
  aliases: ["d", "Daily", "D"],
  category: "economy",
  usage: "work",
  description: "Work A Job To Get Money!",
  run: async (client, message, args) => {
 
  /*  const Jobs = ["Bank Robber", "McDonelds Worker", "Youtuber", "Grave Robber"]
    const Job = Math.floor(Math.random() * (Jobs.lenght)) */
    
    let random = 500
    let user = message.author
    
    // get the robber's wallet
      economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
        if(err) {
          return console.error(err);
        } //Wokerer
        
        if(!data) {
          return message.channel.send(user.username + " you need to have a wallet to get your daily allowances! To get a wallet do $bal");
        }
        
        if(data.DailyCooldown > 0) {
    
          
          let time = ms(data.DailyCooldown);
          
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("#FFFFFF")
          .setDescription(`${user.username} You must wait a day. This is how long you need to wait for. Time left:${time.hours}h ${time.minutes}m ${time.seconds}s`);
          return message.channel.send(timeEmbed);
        }
    
      data.WalletBal += random;
         
          
          data.DailyCooldown = DAILY_COOLDOWN_MS;
          
          let interval = setInterval(() => {
            
            economy.findOne({Guild: message.guild.id, User: message.author.id}, async (err, data) => {
              if(err) {
                return console.error(err);
              }
              
              if(!data) return;
              
              data.DailyCooldown -= 1000;
              data.save();

              if(data.DailyCooldown <= 0) {
                clearInterval(interval);
              }
            });            
          }, 1000);
    
          // data.WalletBal += random;
     data.save();
          
    //  = Math.floor(Math.random() * 100) + 1;
let embed = new Discord.MessageEmbed()
          .setTimestamp(Date.now())
          .setFooter("Rob Command!")
          .setTitle("Daily allowance")
          .addFields(

              { name: "User", value: `${user.tag}`},
              
              { name: "Earned", value: `${random} Credits`}

          )
          .setColor(``)
         return message.channel.send(embed)
    
    //let worker = message.author
        }
     
                      )}
}
