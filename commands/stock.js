const Discord = require("discord.js")
const fs = require("fs")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    message.delete(message)
            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .setTitle('__genZ stock 🍎__')
            .addField('`MC Java Edition:`', `*In stock :green_circle:*`)
           .addField('`spotify:`', `*Low stock :orange_circle:*`)
            .addField('`Steam:`', `*In stock :green_circle:*`)
            .addField('`Origin:`', `*Low stock :orange_circle:*`)
            .addField('`Nordvpn:`', `*In stock :green_circle:*`)
            .addField('`Hulu:`', `*In stock :green_circle:*`)
            .addField('`Disney+:`', `*In stock :green_circle:*`)
            .addField('`Mailaccess:`', `*In stock :green_circle:*`)
            .addField('`crunchyroll:`', `*In stock :green_circle:*`)
            .setThumbnail(message.author.avatarURL)
            .setColor(hex)
            .setTimestamp()
            .setFooter(`Generated by: ${message.author.tag}`)
            message.channel.send(embed)
}