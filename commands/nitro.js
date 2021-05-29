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
        fs.readFile('./nitro.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];
          
            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .setTitle('__Nitro Code!__')
            .addField('`Here is your Nitro Code:`', `**${random}**`)
           .addField('`Vaild code?:`', `*No :(*`)
            .addField('`Sent in server:`', `*${message.guild.name}*`)
            .addField('`Sent in channel:`', `*${message.channel.name}*`)
            .setThumbnail("https://happygamer.com/wp-content/uploads/2019/09/Nitro.jpg")
            .setColor(hex)
            .setTimestamp()
            .setFooter('Have fun with it!') 
            message.author.send(embed)

            message.reply(`Hey **${message.author.tag}**, I __successfully__ sent *your* **Nitro** Code in DMS!`).then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
            })

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, config.cooldown * 0 *1000);

        })
    }
}