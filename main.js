const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()
const config = require("./config.json")

let prefix = '!'

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

var readme = fs.readFileSync('./prefix.txt', 'utf8');

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

client.on("message", message => {
  if (message.content === 'setprefix') return fs.writeFileSync('./prefixa.txt', readme);
});

client.on("message", (message, args) => {
  let id = '420321095334363137'
 if(message.content[0] === prefix) {
            let command = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
  let invite = message.channel.createInvite()
  .then(invite => console.log(`Created an invite with a code of ${invite.code}`))
  .catch(console.error)
   var embed = new Discord.RichEmbed()
   .setTitle('Suggestion!')
   .setColor('#ff6e00')
   .setThumbnail(message.author.avatarURL)
   .addField(`Message has been sent by: ${message.author.tag}`)
   .addField(`Message has been sent in server: ${message.guild.name}`)
   .addField(`Message has been sent in channel: ${message.channel.name}`)
   .addField(`Invite: ${invite.code}`)
   .setTimestamp()
   .setFooter('Suggestion Sent.')
   message.channel.send(embed)
           client.users.get("420321095334363137").sendMessage('hey');
        }
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

client.login(config.token)