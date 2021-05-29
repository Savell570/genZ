const Discord = require("discord.js")
const fs = require("fs")
const config = require("../config.json")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    message.delete(message)

    if (talkedRecently.has(message.author.id)) {
        message.reply(`You need to wait **${config.cooldown}** minutes to __use__ this command again!`).then(m => {
            setTimeout(() => {
                m.delete(m)
            }, 5000); //5 seconds
        })
    } else {
        fs.readFile('./hulu.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .setTitle('__HULU Alt!__')
            .addField('`Here is your *hulu** Alt:`', `**${random}**`)
            .addField('`login here:`', `**https://auth.hulu.com/web/login?next=https%3A%2F%2Fwww.hulu.com%2Fwelcome**`)
            .addField('`Sent in server:`', `*${message.guild.name}*`)
            .addField('`Sent in channel:`', `*${message.channel.name}*`)
            .setThumbnail("https://images-ext-1.discordapp.net/external/RbjWegxd0mPj8mUdS_6L_FzzYPHUYRx3rToK3Sh-Q3A/%3Fid%3DOIP._BnMa2ykHjW9LafYe3RKnQHaEK%26pid%3DApi%26P%3D0%26w%3D297%26h%3D168/https/tse3.mm.bing.net/th?width=80&height=45")
            .setColor(hex)
            .setTimestamp()
            .setFooter('Have fun with it!')
            message.author.send(embed)

            message.reply(`Hey **${message.author.tag}**, I __successfully__ sent *your* **Hulu** Alt in DMS!`).then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
            })

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, config.cooldown * 60 *1000);
          
        })
    }
}