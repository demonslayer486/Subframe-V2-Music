 const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
const economy = require("../../models/economy")

//if(data.WorkCooldown > 0)

const BOOST_SERVER_COOLDOWN_MS = 86400000;

module.exports = {
  name: "boost-server",
  aliases: ["boost"],
  category: "economy",
  usage: "work",
  description: "Work A Job To Get Money!",
  run: async (client, message, args) => {
 
    {
            if (!["492340582543523840", "445523810788179969"].includes(message.member.roles.id))
              //(message.member.roles.id(r => r.name === "Owner")) //if (!["492340582543523840", "445523810788179969"].includes(message.author.id))
              return message.channel.send(
        `${message.author.username} Only Server Bossters can run this command smh`
      );
            {
    
    const Jobs = ["Server Booster"] //Math.floor(Math.random() * (Jobs.lenght))
    const Job = Math.floor(Math.random() * (Jobs.lenght))
    
    let random = Math.floor(Math.random() * 500) ;
    let user = message.author
    
    // get the robber's wallet
      economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
        if(err) {
          return console.error(err);
        } //Wokerer
        
        if(!data) {
          return message.channel.send(user.username + " you need to have a wallet to get your boost money! To get a wallet do $bal");
        }
        
        if(data.ServerBoostCooldown > 0) {
    
          
          let time = ms(data.ServerBoostCooldown);
          
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("#FFFFFF")
          .setDescription(`You worked to hard take a brake ${message.author.username} Time left:${time.hours}h ${time.minutes}m ${time.seconds}s `);
          return message.channel.send(timeEmbed);
        }
    
      data.BankBal += random;
         
          
          data.ServerBoostCooldown = BOOST_SERVER_COOLDOWN_MS;
          
          let interval = setInterval(() => {
            
            economy.findOne({Guild: message.guild.id, User: message.author.id}, async (err, data) => {
              if(err) {
                return console.error(err);
              }
              
              if(!data) return;
              
              data.ServerBoostCooldown -= 1000;
              data.save();

              if(data.ServerBoostCooldown <= 0) {
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
          .setTitle(`Thank you ${message.author.username} Foor Bossting the server here is you coins `)
          .addFields(

              { name: "Woker", value: `${user.tag}`},

              { name: "Woked as", value: `${Jobs}`},

              { name: "Earned", value: `${random} Credits`},
            
              { name: "Where did i put it?", value: `Into you bank account`},
            
              { name: "You need to wait", value: `A day`}

          )
          .setColor(``)
         return message.channel.send(embed)
    
    //let worker = message.author
        }
     
                      )}
}
  }
}