 const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
const economy = require("../../models/economy")

//if(data.WorkCooldown > 0)

const MONTHLY_COOLDOWN_MS = 5184000000;

module.exports = {
  name: "monthly",
  aliases: ["d", "Daily", "D"],
  category: "economy",
  usage: "work",
  description: "Work A Job To Get Money!",
  run: async (client, message, args) => {
 
  /*  const Jobs = ["Bank Robber", "McDonelds Worker", "Youtuber", "Grave Robber"]
    const Job = Math.floor(Math.random() * (Jobs.lenght)) */
    
    let random = 1000
    let user = message.author
    
    // get the robber's wallet
      economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
        if(err) {
          return console.error(err);
        } //Wokerer
        
        if(!data) {
          return message.channel.send(user.username + " you need to have a wallet to get your monthly allowances! To get a wallet do $bal");
        }
        
        if(data.MonthlyCooldown > 0) {
    
          
          let time = ms(data.MonthlyCooldown);
          
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("#FFFFFF")
          .setDescription(`You worked to hard take a brake ${message.author.username} Time left:${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
          return message.channel.send(timeEmbed);
        }
    
      data.WalletBal += random;
         
          
          data.MonthlyCooldown = MONTHLY_COOLDOWN_MS;
          
          let interval = setInterval(() => {
            
            economy.findOne({Guild: message.guild.id, User: message.author.id}, async (err, data) => {
              if(err) {
                return console.error(err);
              }
              
              if(!data) return;
              
              data.MonthlyCooldown -= 1000;
              data.save();

              if(data.MonthlyCooldown <= 0) {
                clearInterval(interval);
              }
            });            
          }, 1000);
    
          // data.WalletBal += random;
     data.save();
          
    //  = Math.floor(Math.random() * 100) + 1;
let embed = new Discord.MessageEmbed()
          .setTimestamp(Date.now())
          .setFooter("Monthly Command!")
          .setTitle("monthly allowance")
          .addFields(

              { name: "User", value: `${user.tag}`},
              
              { name: "Earned", value: `${random} Credits`},
            
            { name: "Earned", value: `thank you ${user.ussername} for wating a month`}

          )
          .setColor(``)
         return message.channel.send(embed)
    
    //let worker = message.author
        }
     
                      )}
}
