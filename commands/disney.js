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
        fs.readFile('./disney.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .setTitle('__Disney Alt!__')
            .addField('`Here is your **Disney** Alt:`', `**${random}**`)
            .addField('`login here:`', `**https://www.disneyplus.com/login**`)
            .addField('`Sent in server:`', `*${message.guild.name}*`)
            .addField('`Sent in channel:`', `*${message.channel.name}*`)
            .setThumbnail("https://media.discordapp.net/attachments/816788275149668382/817137950101340200/image0.png?width=80&height=45")
            .setColor(hex)
            .setTimestamp()
            .setFooter('Have fun with it!')
            message.author.send(embed)

            message.reply(`Hey **${message.author.tag}**, I __successfully__ sent *your* **Disney** Alt in DMS!`).then(m => {
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