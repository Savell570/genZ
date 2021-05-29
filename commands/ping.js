let Discord = require ('discord.js')
exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
    .setDescription(`Pong - ${client.ws.ping}ms`)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.username}`)

    message.channel.send(embed)
} //its done 



