const Discord = require("discord.js")
const fs = require("fs")
const config = require("../config.json")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    message.delete(message)

    if (talkedRecently.has(message.author.id)) {
        message.reply(`You need to wait ${config.cooldown} minutes to use this command again!`).then(m => {
            setTimeout(() => {
                m.delete(m)
            }, 5000); //5 seconds
        })
    } else {
        fs.readFile('./origin.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];
          
            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .setTitle('__Origin Alt!__')
            .addField('`Here is your Origin Alt:`', `**${random}**`)
            .addField('`login here:`', `**https://signin.ea.com/p/originX/login?execution=e203625054s1&initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Fdisplay%3DoriginXWeb%252Flogin%26response_type%3Dcode%26release_type%3Dprod%26redirect_uri%3Dhttps%253A%252F%252Fwww.origin.com%252Fviews%252Flogin.html%26locale%3Den_US%26client_id%3DORIGIN_SPA_ID**`)
            .addField('`Sent in server:`', `*${message.guild.name}*`)
            .addField('`Sent in channel:`', `*${message.channel.name}*`)
            .setThumbnail("https://dl1.cbsistatic.com/i/2017/03/21/2312297a-6f5c-404d-81d7-1f8e377a8e0f/bce055ccfcfebb992fcdca6352ecd4c1/imgingest-8181445661983807467.png")
            .setColor(hex)
            .setTimestamp()
            .setFooter('Have fun with it!') 
            message.author.send(embed)

            message.reply(`Hey **${message.author.tag}**, I __successfully__ sent *your* **Origin** Alt in DMS!`).then(m => {
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