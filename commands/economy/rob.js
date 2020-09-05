const Discord = require("discord.js");
const economy = require("../../models/economy")
const ms = require("parse-ms");

const ROB_COOLDOWN_MS = 180000;

module.exports = {
    name: "rob",
    aliases: ["steal"],
    category: "economy",
    usage: "rob (@user)",
    description: "Rob Someone For Credits!",
    run: async (client, message, args) => {
 

      let robber = message.author
      let user = message.mentions.users.first()
      
      if(!user) {
        return message.channel.send("Make sure you pick who to rob!");
      }
      
      // get the robber's wallet
      economy.findOne({Guild: message.guild.id, User: robber.id}, async (err, data) => {
        if(err) {
          return console.error(err);
        }
        
        if(!data) {
          return message.channel.send("You need a wallet first");
        }
        
        if(data.RobCooldown > 0) {
          
          let time = ms(data.RobCooldown);
          
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("#FFFFFF")
          .setDescription(`<:x:729216316384477255> You have already robbed someone!\n\nCops are Near!\n\nWait Abit Then Try Again! \n\n Time left:${time.minutes}m ${time.seconds}s `);
          return message.channel.send(timeEmbed);
        }
        
        // make sure the user has a wallet
        economy.findOne({Guild: message.guild.id, User: user.id}, async (err, targetData) => {
          if(err) {
            return console.error(err);
          }
          
          if(!targetData) {
            return message.channel.send(user.tag + " does not have a wallet!");
          }
          
          if(data.WalletBal < 200) {
            let moneyEmbed = new Discord.MessageEmbed()
            .setColor("#FFFFFF")
            .setDescription(`<:x:729216316384477255>, Sorry Bro You need atleast 200 coins in your wallet to rob someone!`);
            return message.channel.send(moneyEmbed);
          }
          
          if(targetData.WalletBal < 50) {
            let moneyEmbed2 = new Discord.MessageEmbed()
            .setColor("#FFFFFF")
            .setDescription(`<:x:729216316384477255> ${user.username} does not have anything you can rob`);
            return message.channel.send(moneyEmbed2);
          }
        
          let random = Math.floor(Math.random() * 100) + 1;
          
                    
data.WalletBal += random;
          targetData.WalletBal -= random;
          
          data.RobCooldown = ROB_COOLDOWN_MS;
          
          let interval = setInterval(() => {
            
            economy.findOne({Guild: message.guild.id, User: message.author.id}, async (err, data) => {
              if(err) {
                return console.error(err);
              }
              
              if(!data) return;
              
              data.RobCooldown -= 1000;
              data.save();

              if(data.RobCooldown <= 0) {
                clearInterval(interval);
              }
            });            
          }, 1000);
          
          data.save();
          targetData.save();
          
          let embed = new Discord.MessageEmbed()
          .setTimestamp(Date.now())
          .setFooter("Rob Command!")
          .setTitle("Rob Command!")
          .addFields(

              { name: "Author", value: `${robber.tag}`},

              { name: "User", value: `${user.tag}`},

              { name: "Amount Stolen", value: `${random} Credits`}

          )
          .setColor(`RANDOM`)
          message.channel.send(embed);
          
        });
      });

    
  }
}