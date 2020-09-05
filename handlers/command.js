const { readdirSync } = require("fs");

const ascii = require("ascii-table");

const Discord = require("discord.js");

/* const ms = require("ms");
  
const thimeouts = ms
*/

// Create a new Ascii table
let table = new ascii("Commands");
table.setHeading("Command", "Load status");

module.exports = (client, message) => {
    // Read every commands subfolder
    readdirSync("./commands/").forEach(dir => {
        // Filter so we only have .js command files
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
      
        // Loop over the commands, and add all of them to a collection
        // If there's no name found, prevent it from returning an error,
        // By using a cross in the table we made.
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
         /*  if(!commands.timeouts) {

            if(timeouts.has(`${commands.name}${message.author.send}`)) return message.channel.send(`this command has a cool down sorry ${message.author.username})
          
          }, */ 
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
    
            // If there's an aliases key, read the aliases.
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
   // Log the table
 // client.channel.fetch('744366696915271710')    
  /* channel.send(table.toString());
    */
  
  
    console.log(table.toString())
  console.log(`Your first handler is online`)
      
}
// move to commands/adminstor/ad.js
// don't your commands have set permissions?


