/* const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "commands",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "help",
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Not Provided :(")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("RANDOM")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription("Join my server or Die :D")
        .setColor("GREEN")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL());

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }

      return message.channel.send(emx);
    }
  }
};

*/

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "commands",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "help",
  run: async (client, message, args) => {
    
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name,)
        .addField("Description", command.description || "Not Provided :(")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied")
        //.setThumbnail(client.user.displayAvatarURL())
        //.setColor("RANDOM")
        //.setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    }

    if (args[0] === 'server') {
    
      const Server = new MessageEmbed()
      
      .setTitle("Server Commands 🖥️")
      .setDescription("*There are 12 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "Some fun commands with you and your friends",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$report`, `$bot-info`, `$emoji`, `$emojify`, `$oldest`, `$reddit`, `$rickroll`, `$server-info`, `$suggestion`, `$timer`, `$user-info`, `$userid`, `$youngest`",
                    inline: true
                }
        )
      
       return message.channel.send(Server)
    }
    
     if (args[0] === 'server_support') {
    
      const Server_Support = new MessageEmbed()
      
      .setTitle("Server_Support Commands 🎫")
      .setDescription("*There are 3 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "Just to open some tickets",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$close`, `$ticket-role`, `$tickt`",
                    inline: true
                }
        )
      
       return message.channel.send(Server_Support)
    }
    
    if (args[0] === 'world') {
    
      const world = new MessageEmbed()
      
      .setTitle("World Commands 🗺")
      .setDescription("*There are 3 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "Some world commands",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$corona`, `$imdb`, `$wather`",
                    inline: true
                }
        )
      
       return message.channel.send(world)
    }
    
    if (args[0] === 'admin') {
    
      const administrator = new MessageEmbed()
      
      .setTitle("Administrator Commands 🧑🏻‍💻")
      .setDescription("*There are 10 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "Only people who have `administrator` permission have access to this commands",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$give-role`, `$has-role`, `$has-role`, `$remove-role`, `$ad`, `$announce`, `$emoji`, `$lock`, `$role`, `$slowmode`",
                    inline: true
                }
        )
      
       return message.channel.send(administrator)
    }
    
     if (args[0] === 'animal') {
    
      const Animal = new MessageEmbed()
      
      .setTitle("Animal Commands 🦊")
      .setDescription("*There are 2 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "Animal commands for you animal lovers. *More commands comming soon*",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$cats`, `$dog`",
                    inline: true
                }
        )
      
       return message.channel.send(Animal)
    }
    
    if (args[0] === 'dev') {
    
      const Dev = new MessageEmbed()
      
      .setTitle("Dev Commands 💻")
      .setDescription("*There are 1 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "The people who helped me personally helped me with my bot",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$dev`",
                    inline: true
                }
        )
      
       return message.channel.send(Dev)
    }
    
    if (args[0] === 'economy') {
    
      const Economy = new MessageEmbed()
      
      .setTitle("Economy Commands 📈")
      .setDescription("*There are 7 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "You finished education and you want to work. Get some money in your pockets. *More commands comming soon and the commands can be glitchy/buggy*",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$bal`, `$beg`, `$deposit`, `$monthly`, `$rob`, `$withdraw`, `$work`",
                    inline: true
                }
        )
      
       return message.channel.send(Economy)
    }
    
    if (args[0] === 'fun') {
    
      const Fun = new MessageEmbed()
      
      .setTitle("Fun Commands 🎉")
      .setDescription("*There are 14 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "Funny commands for you and maybe friends",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$8ball`, `$ascii`, `$clyde`, `$feelings`, `$hack`, `$hug`, `$joke`, `$k8`, `$meme`, `$pokemon` `$say`, `$ship`, `$simp`",
                    inline: true
                }
        )
      
       return message.channel.send(Fun)
    }
    
    if (args[0] === 'gif') {
    
      const Gif = new MessageEmbed()
      
      .setTitle("Gif Commands 😛")
      .setDescription("*There are 2 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "Funny gif commands",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$slap`, `$kiss`",
                    inline: true
                }
        )
      
       return message.channel.send(Gif)
    }
    
     if (args[0] === 'host') {
    
      const Host = new MessageEmbed()
      
      .setTitle("Host Commands ✨")
      .setDescription("*There are 2 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "If a user has a role called `Host` oe `Den Host` then the user can use this commands",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$denhost`, `$helpme`, `$monhost`",
                    inline: true
                }
        )
      
       return message.channel.send(Host)
    }
    
    if (args[0] === 'math') {
    
      const Math = new MessageEmbed()
      
      .setTitle("Math Commands 🖩")
      .setDescription("*There are 2 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "You need help[ with yuor maths homework?]",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`add`, `$takeaway`",
                    inline: true
                }
        )
      
       return message.channel.send(Math)
    }
    
     if (args[0] === 'moderation') {
    
      const Moderation = new MessageEmbed()
      
      .setTitle("Moderation Commands 📱")
      .setDescription("*There are 19 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "Most of this commands will need `Manage_Messages` permisson",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$ban`, `$clear`, `$delete-channel`, `$dm`, `$embeddm`, `$giveaway`, `$kick`, `$mute`, `$polls`, `$rename`, `$role-check`, `$setwelcome`, `$snipe`, `$unban`, `$unmute`, `$warn`, `$warns`",
                    inline: true
                }
        )
      
       return message.channel.send(Moderation)
    }
    
    if (args[0] === 'modmail') {
    
      const Moderation = new MessageEmbed()
      
      .setTitle("Modmail Commands ✉️")
      .setDescription("*There are 2 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "Members are nneding help try and set up modmail. *not for all servers yet*",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$modmail-help`, `$setup`",
                    inline: true
                }
        )
      
       return message.channel.send(Moderation)
    }
    
    if (args[0] === 'random') {
    
      const Random = new MessageEmbed()
      
      .setTitle("Random Commands 🎚️")
      .setDescription("*There are 8 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "this are fun commands try them out",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$cry`, `$joke`, `$kpop`, `$meme2`, `$pat`, `$advice`, `$waifu` ",
                    inline: true
                }
        )
      
       return message.channel.send(Random)
    }
    
    if (args[0] === 'topic') {
    
      const Topic = new MessageEmbed()
      
      .setTitle("Topic Commands 📊")
      .setDescription("*There are 1 commands*")
      .addFields(
             {
                    name: "**Discription**",
                    value: "Want to change the topic just run thris command",
                    inline: true
                },
             {
                    name: "**Commands**",
                    value: "`$cry`, `$joke`, `$kpop`, `$meme2`, `$pat`, `$advice`, `$waifu` ",
                    inline: true
                }
        )
      
       return message.channel.send(Topic)
    }
    
     const Commands = new MessageEmbed()
      
      .setTitle(`All ${client.user.username} Commands`)
      //.setDescription("*There are 10 commands*")
      .addFields(
             {
                    name: "**Server 🖥️**",
                    value: "12 commands",
                    inline: true
                },
             {
                    name: "**Server_Support 🎫**",
                    value: "3 commands",
                    inline: true
                },
                     {
                    name: "**World Commands 🗺**",
                    value: "3 commands",
                    inline: true
                },
        {
                    name: "**Administrator Commands 🧑🏻‍💻**",
                    value: "10 commands",
                    inline: true
                },
        {
                    name: "**Animal Commands 🦊**",
                    value: "2 commands",
                    inline: true
                },
        {
                    name: "**Dev Commands 💻**",
                    value: "1 commands",
                    inline: true
                },
        {
                    name: "**Economy Commands 📈**",
                    value: "7 commands",
                    inline: true
                },
        {
                    name: "**Fun Commands 🎉**",
                    value: "14 commands",
                    inline: true
                },
        {
                    name: "**Gif Commands 😛**",
                    value: "2 commands",
                    inline: true
                },
        {
                    name: "**Host Commands ✨**",
                    value: "2 commands",
                    inline: true
                },
        {
                    name: "**Math Commands 🖩**",
                    value: "2 commands",
                    inline: true
                },
        {
                    name: "**Moderation Commands 📱**",
                    value: "19 commands",
                    inline: true
                },
        {
                    name: "**Modmail Commands ✉️**",
                    value: "2 commands",
                    inline: true
                },
        {
                    name: "**Random Commands 🎚️**",
                    value: "8 commands",
                    inline: true
                },
         {
                    name: "**Topic Commands 📊**",
                    value: "1 commands",
                    inline: true
                },
        
        
        )
      .setFooter("To fun this command dp $(name) uoi don't need to do a emoji")
       return message.channel.send(Commands)
    
  }
}