 const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
const economy = require("../../models/economy")

//if(data.WorkCooldown > 0)

const BEG_COOLDOWN_MS = 10;

module.exports = {
  name: "beg",
  aliases: ["job"],
  category: "economy",
  usage: "work",
  description: "Work A Job To Get Money!",
  run: async (client, message, args) => {
 
    /* const Jobs = ["Bank Robber", "McDonelds Worker", "Youtuber", "Grave Robber"]
    const Job = Math.floor(Math.random() * (Jobs.lenght)) */
    
    
    
    let random = Math.floor(Math.random() * 100) + 1;
    let user = message.author
    
    // get the robber's wallet
      economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
        if(err) {
          return console.error(err);
        } //Wokerer
        
        if(!data) {
          return message.channel.send(user.username + " you need to have a wallet to work! To get a wallet do $bal");
        }
        
        if(data.BegCooldown > 0) {
    
          
          let time = ms(data.BegCooldown);
          
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("#FFFFFF")
          .setDescription(`You have begged to much ${message.author.username}. People might get suspicious please wait. Time left:${time.seconds}s `);
          return message.channel.send(timeEmbed);
        }
    
      data.WalletBal += random;
         
          
          data.BegCooldown = BEG_COOLDOWN_MS;
          
          let interval = setInterval(() => {
            
            economy.findOne({Guild: message.guild.id, User: message.author.id}, async (err, data) => {
              if(err) {
                return console.error(err);
              }
              
              if(!data) return;
              
               data.BegCooldown -= 1000;
              data.save();

              if(data.BegCooldown <= 0) {
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
          .setTitle("Begger")
          .addFields(

              { name: "You have begged for", value: `${random} Credits`}

          )
          .setColor(``)
         return message.channel.send(embed)
    
    //let worker = message.author
        }
     
                      )}
}
