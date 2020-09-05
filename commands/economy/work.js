 const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
const economy = require("../../models/economy")

//if(data.WorkCooldown > 0)

const WORK_COOLDOWN_MS = 300000;

module.exports = {
  name: "work",
  aliases: ["job"],
  category: "economy",
  usage: "work",
  description: "Work A Job To Get Money!",
  run: async (client, message, args) => {
 
    let Jobs = ["Bank Robber", "McDonelds Worker", "Youtuber", "Grave Robber"] //Math.floor(Math.random() * (Jobs.lenght))
    const Job = Math.floor(Math.random() * (Jobs.lenght))
    
    let random = Math.floor(Math.random() * 250) + 1;
    let user = message.author
    
    // get the robber's wallet
      economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
        if(err) {
          return console.error(err);
        } //Wokerer
        
        if(!data) {
          return message.channel.send(user.username + " you need to have a wallet to work! To get a wallet do $bal");
        }
        
        if(data.WorkCooldown > 0) {
    
          
          let time = ms(data.WorkCooldown);
          
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("#FFFFFF")
          .setDescription(`You worked to hard take a brake ${message.author.username} Time left:${time.minutes}m ${time.seconds}s `);
          return message.channel.send(timeEmbed);
        }
    
      data.WalletBal += random;
         
          
          data.WorkCooldown = WORK_COOLDOWN_MS;
          
          let interval = setInterval(() => {
            
            economy.findOne({Guild: message.guild.id, User: message.author.id}, async (err, data) => {
              if(err) {
                return console.error(err);
              }
              
              if(!data) return;
              
              data.WorkCooldown -= 1000;
              data.save();

              if(data.WorkCooldown <= 0) {
                clearInterval(interval);
              }
            });            
          }, 1000);
    
          // data.WalletBal += random;
     data.save();
          
    //  = Math.floor(Math.random() * 100) + 1;
let embed = new Discord.MessageEmbed()
          .setTimestamp(Date.now())
          .setFooter(`Weldone ${message.author.username} you got ${random}`)
          .setTitle("A hard worker")
          .addFields(

              { name: "Woker", value: `${user.tag}`},

              { name: "Woked as", value: Jobs[Math.floor(Math.random() * Jobs.length)]},

              { name: "Earned", value: `${random} Credits`}

          )
          .setColor(``)
         return message.channel.send(embed)
    
    //let worker = message.author
        }
     
                      )}
}

/*
 if(data.WorkCooldown > 0) {
          
          let time = ms(data. WorkCooldown);
          
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("#FFFFFF")
          .setDescription(`<:x:729216316384477255> You have already robbed someone!\n\nCops are Near!\n\nWait Abit Then Try Again! \n\n Time left:${time.minutes}m ${time.seconds}s `);
          return message.channel.send(timeEmbed);
        }
    
    })
*/ 
