const Discord = require("discord.js")
const fs = require("fs")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    message.delete(message)
            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .setTitle('__Help Command!__')
            .addField('***Awesome alts that you can get:***', '­­­')
            .addField('`MC Java Edition:`', `*>mcgen*`)
            .addField('`Spotify:`', `*>spotifygen*`)
            .addField('`Steam:`', `*>steamgen [NEW]*`)
            .addField('`Origin:`', `*>origingen*`)
            .addField('`Nordvpn:`', `*>nordvpngen*`)
            .addField('`Hulu:`', `*>hulugen*`)
            .addField('`Disney+:`', `*>disneygen*`)
            .addField(`Donate to help the Owner!!\nDo: **>donate (the account name) (the accounts your donating)**`, '­­­')
            .addField(`You can suggest your accounts idea!\nDo: **>suggest [alts idea]**`, '­­­')
            .addField('`to see my stock do:`', `*>stock*`)
            .addField(`✔️Click Here For The Support **__Server__**!`, `[***Here!!***](https://discord.gg/wAnAEkaVnt)`, true)
            .setThumbnail(message.author.avatarURL)
            .setColor(hex)
            .setTimestamp()
            .setFooter(`Generated by: ${message.author.tag}`)
            message.channel.send(embed)
}