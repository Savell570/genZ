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
        fs.readFile('./nordvpn.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .setTitle('__Nordvpn Alt!__')
            .addField('`Here is your **Nordvpn** Alt:`', `**${random}**`)
            .addField('`login here:`', `**https://my.nordaccount.com/oauth2/login**`)
            .addField('`Sent in server:`', `*${message.guild.name}*`)
            .addField('`Sent in channel:`', `*${message.channel.name}*`)
            .setThumbnail("https://images-ext-2.discordapp.net/external/6cQv1YtLoy6P8L8XFPcmpWa4uMJQrqviU1SJzPVRMJ4/%3Fid%3DOIP.j6Ue1697V7mWU-J0ob8fGQHaFG%26pid%3DApi%26P%3D0%26w%3D237%26h%3D164/https/tse2.mm.bing.net/th?width=80&height=55")
            .setColor(hex)
            .setTimestamp()
            .setFooter('Have fun with it!')
            message.author.send(embed)

            message.reply(`Hey **${message.author.tag}**, I __successfully__ sent *your* **Nordvpn** Alt in DMS!`).then(m => {
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