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

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'to donate do >donate',
            type: "PLAYING"
        }
    });

});



client.on('guildDelete', (guild) => { // If the Bot was removed on a server, proceed
 let embed = new Discord.RichEmbed()
  .setTitle('Removed From Server!')
  .addField(`Server: ${guild.name}`)
  .addField(`Channel: ${guild.channel.name}`)
  .addField(`Joined at: ${moment.duration}`)
 client.users.get("813300649738502154").sendMessage(embed);
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


  client.on('message', msg => {
    
  if (msg.guild && msg.content.startsWith('/private')) {
    let text = msg.content.slice('/private'.length); // cuts off the /private part
    msg.guild.members.forEach(member => {
      if (member.id != client.user.id && !member.user.bot) member.send(text);
    });
  }
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));


client.login(config.token)