const Discord = require("discord.js")
const fs = require("fs")
const config = require("../config.json")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

        fs.readFile('./nordvpn.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .setTitle('__NordVPN Alt!__')
            .addField('`Here is your NordVPN Alt:`', `**${random}**`)
            .addField('`Sent in server:`', `*${message.guild.name}*`)
            .addField('`Sent in channel:`', `*${message.channel.name}*`)
            .setThumbnail("https://tse2.mm.bing.net/th?id=OIP.j6Ue1697V7mWU-J0ob8fGQHaFG&pid=Api&P=0&w=237&h=164")
            .setColor(hex)
            .setTimestamp()
            .setFooter('Have fun with it!')
            message.author.send(embed)

            message.reply(`Hey **${message.author.tag}**, I __successfully__ set *your* **NordVPN** Alt in DMS!`).then(m => {
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