 
const { TOKEN, default_prefix } = require("./config.json");
const { config } = require("dotenv");
const  discord   = require("discord.js");
const   Discord  = require("discord.js");
const { prefix, ServerID } = require("./config.json")
//const client = new discord.Client({
  //disableEveryone: true // this disallows the client (bot) from pinging everyone even if it has perms to
//});
const { Random } = require("something-random-on-discord")
const random = new Random();
const storage = require("./storage");

const Commando = require('discord.js-commando');

const client = new Commando.Client({
    owner: '492340582543523840',
   commandPrefix: '$'
}); 

const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

var express = require("express");
var app = express();
var path = require("path")
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("index", {client: client})
});

app.get("/stats", function(req, res) {
  res.render("stats", {client: client})
});

app.get("/commands", function(req, res) {
  res.render("commands", {client: client})
});

/*  var listeners = app.listen(process.env.PORT, function() {
    console.log("Your app id listening on port " + listeners.address().port)
  }) */ 

const db = require("quick.db"); //WE WILL BE USING QUICK.DB
const { addexp } = require("./handlers/xp.js");


//client.music = new discord.Collection();
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.snipes = new discord.Collection();
client.events = new discord.Collection();

// functions to mess with the data
function fetchData(compartment) {
  
  let jsonData = storage.readJson("database");
  
  if(!jsonData)
    return null;
  
  console.log("Reading data from database compartment: " + compartment);
  
  return jsonData[compartment];
}

function saveData(compartment, data) {
  
  let originalJsonData = storage.readJson("database");
  
  if(!originalJsonData) {
      storage.saveJson("database", {});
      originalJsonData = {};
  }
  
  originalJsonData[compartment] = data;
  
  storage.saveJson("database", originalJsonData);
  
  console.log("Saved new data to database compartment: " + compartment);
}
 




["command", "event"].forEach(handler=>{
  // try {
  require(`./handlers/${handler}`)(client);
  // } catch(err) {
  //   console.error("Error loading " + handler + ": " + err);
  // }
});
 
//error 


const Default_Prefix = "$"


  // https://media.discordapp.net/attachments/714220630618275940/736602066159665152/ezgif.com-video-to-gif_4.gif

module.exports = {
  Random: require("./commands/random/random.js"),
  fetchData: fetchData,
  saveData: saveData
} 

/* client.on('message', async message => {
  
      const { content } = message
  
  const code = content.split(`${client.user.username}`)[1]
    //console.log('Invite:', code)
  
  if (content.includes(`${client.user.username}`)) {
    return message.channel.send('hello')
  }
}) */

 client.on('message', async message => {
  /* if (message.author.bot) return;
  if (!message.guild) return; 

  let CurrentServerPrefix = db.get(`Prefix_${message.guild.id}`);
  if (CurrentServerPrefix === null) CurrentServerPrefix = Default_Prefix;

  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) 
    return message.channel.send(`My Current Prefix Is : ${CurrentServerPrefix}`) 
*/
   
 /* const { content } = message
  
  const code = content.split(`<@492340582543523840>`)[1]
    
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
     return message.channel.send("Note from the onwer.\n\Please don't ping me mate -_-")  
  }
            
  //return;
   
//const code = content.split(`<@492340582543523840>`)[1]

            
              if (content.includes(`<@492340582543523840>`)) { */
    
 // if (content.includes['']){
  //await message.delete()
    //return message.channel.send("Note from the onwer.\n\Please don't ping me mate -_-")  
    
//  }
            
}) 

//client.on('message', async message => {

/** let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.cache.get('725861083855847486').send(x. join(" "))});


client.on('message', async message => {
      let user = ['']
      if(user.includes(message.author.id)) {
            message.channel.send("OwO you are so cute"); //DemonS: 492340582543523840
      }
});

 client.on('message', async message => {
      const emojiSequence = ['726197223867809866', '738508990568464414', "739241827017818203"];
      let user = [''] //Demons: 492340582543523840
      if(user.includes(message.author.id)) {
          for (const emoji of emojiSequence) {
              await message.react(emoji);
          }
      }
  });
*/
client.prefix = "YOUR_CUTE_LIL_PREFIX_HERE"

client.on("message", msg => {
  let text = msg.content;
  let author = msg.author;
  let channel = msg.channel.name;
  let guild = msg.guild;
  // e.g. DemonS#1798
  
  console.log(`${author.tag}, ${channel}, ${guild} > ${text} `);
   
  if (text.startsWith(default_prefix)) {
    let words = text.split(" ");
    let cmd = words[0].replace(" ").toUpperCase();
    let args = words.slice(1);

    console.log(
      `${author.tag} used command ${cmd} with arguments ${args.join(", ")} in ${channel}, ${guild}`
    );
  }
});

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;
})

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === '💖welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member} Please read are rules or we will ban you if you brake on!`);
});
client.on("message", async message => {
   let default_prefix = await db.fetch(`default_prefix_${message.guild}`) //.id
   if(prefix == null) {
   prefix = default_prefix
  }
  
     let blacklist = await db.fetch(`blacklist_${message.author.id}`) //.id
   
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
      
    if (blacklist === "Blacklisted") return message.reply("You are blacklisted from the bot!")

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);

  return addexp(message);
}); //All codes link in description

//GONNA USE EVENT HERE

client.on("messageDelete", async message => {
  require("./events/guild/messageDelete")(message); // neesds a ) here
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  require("./events/guild/messageUpdate")(oldMessage, newMessage);
});

client.on('message', message => {
    if (message.content === `${default_prefix}name`) {
        message.channel.send(message.guild.name);
      }else if (message.contect === `${default_prefix}online`) {
        message.channel.send(`Total Members: ${message.guild.memberCount}`);
      }else if (message.channel === `${default_prefix}me`) {
        message.channel.send(`Username: ${message.auther.username}`);
        message.channel.send(`ID: ${message.auther.id}`);
      }
});

client.on('guildMemberAdd', async member => { 
  member.roles.add("747239037282287708")
})

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
 
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 
    channel.send(
      `Welcome to the server, ${member.user.username}!`,
      attachment
    );   
   });

client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'leave');
    if (!channel) return;
 
   let data = await canva.welcome(member, { link: "https://www.civilserviceworld.com/siteimg/news-hero/ugc-1/fullnews/news/21438/23411_original.jpg" })
 
    const attachment = new discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 
    channel.send(
      `Shame to see you go, ${member.user.username} we hope to see you soon!`,
      attachment
    );   
   });




client.models = { user: require('./database/models/user.js') }
require('./database/connect.js')



client.on("guildMemberAdd", member => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  let wembed = new discord.MessageEmbed()
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("#ff2050")
    .setThumbnail(member.user.avatarURL())
    .setDescription(`We are very happy to have you in our server`);

  client.channels.cache.get(chx).send(wembed);
});



client.on("channelDelete", (channel) => {
    if(channel.parentID == channel.guild.channels.cache.find((x) => x.name == "MODMAIL").id) {
        const person = channel.guild.members.cache.find((x) => x.id == channel.name)

        if(!person) return;

        let yembed = new discord.MessageEmbed()
        .setAuthor("MAIL DELETED", client.user.displayAvatarURL())
        .setColor('RED')
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription("Your mail is deleted by moderator and if you have any problem with that then you can open mail again by sending message here.")
    return person.send(yembed)
    
    }


}) 


client.on("message", async message => {
  if(message.author.bot) return;

  let args = message.content.slice(prefix.length).split(' ');
  let command = args.shift().toLowerCase();


 if(message.guild) {
 /*     if(command == "setup") {
          if(!message.member.hasPermission("ADMINISTRATOR")) {
              return message.channel.send("You need Admin Permissions to setup the modmail system!")
          }

          let role = message.guild.roles.cache.find((x) => x.name == "SUPPORTER")
          let everyone = message.guild.roles.cache.find((x) => x.name == "@everyone")

          if(!role) {
              role = await message.guild.roles.create({
                  data: {
                      name: "SUPPORTER",
                      color: "GREEN"
                  },
                  reason: "Role needed for ModMail System"
              })
          }

          await message.guild.channels.create("MODMAIL", {
              type: "category",
              topic: "All the mail will be here :D",
              permissionOverwrites: [
                  {
                      id: role.id,
                      allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
                  }, 
                  {
                      id: everyone.id,
                      deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
                  }
              ]
          })


          return message.channel.send("Setup is Completed :D") 

      } else */
          
          if(command == "close") {


        if(message.channel.parentID == message.guild.channels.cache.find((x) => x.name == "MODMAIL").id) {
            
            const person = message.guild.members.cache.get(message.channel.name)

            if(!person) {
                return message.channel.send("I am Unable to close the channel and this error is coming because probaly channel name is changed.")
            }

            await message.channel.delete()
const Reason = args.join(" ");
            let yembed = new discord.MessageEmbed()
            .setAuthor("MAIL CLOSED", client.user.displayAvatarURL())
            .setColor("RED")
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter("Mail is closed by " + message.author.username)
            if(args[0]) yembed.setDescription(`${"There was a note from the Mod: " + Reason}`)
          if (!Reason) 
              yembed.setDescription("I'm sorry but a mod didn't give a reason ;-;")
            return person.send(yembed)

        }
      } else if(command == "open") {
          const category = message.guild.channels.cache.find((x) => x.name == "MODMAIL")

          if(!category) {
              return message.channel.send("Moderation system is not setuped in this server, use " + prefix + "setup")
          }

          if(!message.member.roles.cache.find((x) => x.name == "SUPPORTER")) {
              return message.channel.send("You need supporter role to use this command")
          }

          if(isNaN(args[0]) || !args.length) {
              return message.channel.send("Please Give the ID of the person")
          }

          const target = message.guild.members.cache.find((x) => x.id === args[0])

          if(!target) {
              return message.channel.send("Unable to find this person.")
          }


          const channel = await message.guild.channels.create(target.id, {
              type: "text",
            parent: category.id,
            topic: "Mail is Direct Opened by **" + message.author.username + "** to make contact with " + message.author.tag
          })

          let nembed = new discord.MessageEmbed()
          .setAuthor("DETAILS", target.user.displayAvatarURL({dynamic: true}))
          .setColor("BLUE")
          .setThumbnail(target.user.displayAvatarURL({dynamic: true}))
          .setDescription(message.content)
          .addField("Name", target.user.username)
          .addField("Account Creation Date", target.user.createdAt)
          .addField("Direct Contact", "Yes(it means this mail is opened by a supporter)");

          channel.send(nembed)

          let uembed = new discord.MessageEmbed()
          .setAuthor("DIRECT MAIL OPENED")
          .setColor("GREEN")
          .setThumbnail(client.user.displayAvatarURL())
          .setDescription("You have been contacted by Supporter of **" + message.guild.name + "**, Please wait until he send another message to you!");
          
          
          message.member.send(uembed);

          let newEmbed = new discord.MessageEmbed()
          .setDescription("Opened The Mail: <#" + channel + ">")
          .setColor("GREEN");

          return message.channel.send(newEmbed);
      } else if(command == "modmail-help") {
          let embed = new discord.MessageEmbed()
          .setAuthor('MODMAIL BOT', client.user.displayAvatarURL())
          .setColor("GREEN")
          
        .setDescription(" :D")
        .addField(prefix + "setup", "Setup the modmail system(This is not for multiple server.)", true)
  
        .addField(prefix + "open", 'Let you open the mail to contact anyone with his ID', true)
        .setThumbnail(client.user.displayAvatarURL())
                    .addField(prefix + "close", "Close the mail in which you use this command.", true);

                    return message.channel.send(embed)
          
      } //newEmbed
  } 
  
  if(message.channel.parentID) {

    const category = message.guild.channels.cache.find((x) => x.name == "MODMAIL")
    
    if(message.channel.parentID == category) {
        let member = message.guild.members.cache.get(message.channel.name)
    
        if(!member) return message.channel.send('Unable To Send Message')
    
        let lembed = new discord.MessageEmbed()
        .setColor("GREEN")
        .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(message.content)
    
        return member.send(lembed)
    }
      } 
  
  if(!message.guild) {
      const guild = await client.guilds.cache.get(ServerID);
      if(!guild) return;

      const main = guild.channels.cache.find((x) => x.name == message.author.id)
      const category = guild.channels.cache.find((x) => x.name == "MODMAIL")

      if(!main) {
          let mx = await guild.channels.create(message.author.id, {
              type: "text",
              parent: category.id,
              topic: "This mail is created for helping  **" + message.author.tag + " **"
          })

          let sembed = new discord.MessageEmbed()
          .setAuthor("MAIN OPENED")
          .setColor("GREEN")
          .setThumbnail(client.user.displayAvatarURL())
          .setDescription("Conversation is now started, you will be contacted by supporters soon :D")

          message.author.send(sembed)

          let eembed = new discord.MessageEmbed()
          .setAuthor("DETAILS", message.author.displayAvatarURL({dynamic: true}))
          .setColor("BLUE")
          .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
          .setDescription(message.content)
          .addField("Name", message.author.username)
          .addField("Account Creation Date", message.author.createdAt)
          .addField("Direct Contact", "No(it means this mail is opened by person not a supporter)")

        return mx.send(eembed)
      }

      let xembed = new discord.MessageEmbed()
      .setColor("YELLOW")
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setDescription(message.content)

      main.send(xembed)

  }
          
})



client.on("ready", () => {
  
  let database = storage.readJson("database");
  
  if(!database) {
    storage.saveJson("database", {});
  }
  
});

/*client.on('message', async message => { 
 if(message.channel.name == 'global-chat' && !message.author.bot){
   client.guilds.cache.forEach(guild=>{
     if(guild == message.guild) return;
     let channel = guild.channels.cache.find(ch=>ch.name === 'global-chat');
     if(!channel) return;
     let embed = new discord.MessageEmbed()
     .setAuthor(message.author.tag +" | Global Chat", message.author.displayAvatarURL())
     .setColor("#00c1ff")
     .setDescription(message.content)
     .setFooter("Server : "+message.guild.name, (message.guild.iconURL({ dynamic: true })))
     .setTimestamp()
     channel.send(embed)
   })
 }
})

//const ownerId = '492340582543523840' // my discord user ID
//const channelId = '748356103179599962'


client.on('message', async message => { 
 if(message.channel.name == 'error' && !message.author.bot){
   client.guilds.cache.forEach(guild=>{
     if(guild == message.guild) return;
     let channel = guild.channels.cache.find(ch=>ch.name === 'error');
     if(!channel) return;
     let embed = new discord.MessageEmbed()
     .setAuthor(message.author.tag +" | Error Chat", message.author.displayAvatarURL())
     .setColor("#00c1ff")
     .setDescription(message.content)
     .setFooter("Server : "+message.guild.name, (message.guild.iconURL({ dynamic: true })))
     .setTimestamp()
     channel.send(embed)
   })
 }
}) */

const fs = require('fs')

// const antiAd = require('./anti-ad')
const antiAd = require('./anti-ad')
const memberCount = require('./member-count')
//const levels = require('./level')
const firstMessage = require('./first-message')
//const roleClaim = require('./role-claim')

  client.on("ready", async () => { //When bot is ready 
  console.log('Your Second Commands Handler Is Online')
    
   /* 
    client.channels.fetch('744366696915271710')
    .then((channel) => {
   let embed = new discord.MessageEmbed()
   .setTitle("") 
   .setDescription(`**${client.user.username} Second Commands Handeler Is Online**`)
    
   channel.send(embed) 
    //  channel.send('Bot Online!')
  }) */

    
 // antiAd(client)
    memberCount(client)
    //levels(client)
    firstMessage(client, '750301078616014872', 'It works so well now', ['741653294279163934', '741653350621249536'])
    //roleClaim(client)
    
  const baseFile = 'command-base.js'
  const commandBase = require(`./Commands/${baseFile}`)
  
  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('Commands')
})

 //const Commando = require('discord.js-commando');
//const Client = require('discord.js-commando');



client.on("ready", async () => { //When bot is ready 
  console.log('Your Third Commands Handler Is Online')
  
  const Prefix3 = "!"
  
 //const Commando = require('discord.js-commando'); 

  
  const path = require('path');
  
client.registry
    // Registers your custom command groups
    .registerGroups([
        ['games', 'Fun Game command'],
        ['some', 'Some group'],
        ['other', 'Some other group']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'cmds'));
  
})

//const AFKD = require("../../models/afk");

/*client.on("message", (message) => {
    if (message.author.bot) return;
    let ping = message.mentions.members.first();
    if (ping) {
        AFKD.findOne({
            ID: ping.id,
        }, (err, data) => {
            if (err) throw err;
            if (data) {
                if (data.AFK === true) {
                    message.channel.send(`${ping.user.username} is AFK. Reason: ${data.Reason}`);
                }
            }
        });
    }
    AFKD.findOne({
        ID: message.author.id,
    }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (data.AFK === true) {
                data.AFK = false;
                data.Reason = "";
                await data.save();
                message.channel.send(`Welcome back, ${message.author}! I removed your AFK`);
            }
        }
    });
}); */

client.login(process.env.BOT_TOKEN)

 
//NzAwNDgxNjYwOTAyNDQxMDIw.XpjkYg.DeuLrDJL06Q6DrOU76MBJfjxAus process.env.BOT_TOKEN
//npm i random-puppy 