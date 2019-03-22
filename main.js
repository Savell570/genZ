const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()
const config = require("./config.json")
const table = require('table');
const moment = require('moment');
require('moment-duration-format');

let prefix = '!'

client.on('ready', () => { // If the Bot went on, proceed
    console.log('I\'m Online!');
});

client.on('guildCreate', (guild) => { // If the Bot was added on a server, proceed

    let embed = new Discord.RichEmbed()
  .setTitle('Joined Server!')
  .addField(`Server: ${guild.name}`)
  .addField(`Channel: ${guild.channel.name}`)
  .addField(`Joined at: ${moment.duration}`)
 client.users.get("420321095334363137").sendMessage(embed);
});


client.on('guildDelete', (guild) => { // If the Bot was removed on a server, proceed
 let embed = new Discord.RichEmbed()
  .setTitle('Removed From Server!')
  .addField(`Server: ${guild.name}`)
  .addField(`Channel: ${guild.channel.name}`)
  .addField(`Joined at: ${moment.duration}`)
 client.users.get("420321095334363137").sendMessage(embed);
});

client.on('ready', () => {
   client.user.setPresence({
        game: {
            name: `Over ${client.guilds.size} servers! | ${config.status}`,
            type: "WATCHING"
        }
   })

   console.log(`You can invite this bot to your server with this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
   console.log(`You can invite this bot to your server with this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
   console.log(`You can invite this bot to your server with this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
   console.log(`You can invite this bot to your server with this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
   console.log(`You can invite this bot to your server with this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)

});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
      
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

client.login(config.token)