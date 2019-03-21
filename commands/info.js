const Discord = require('discord.js');
function msToTime(s) {
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    return pad(hrs) + ' hour ' + pad(mins) + ' minute ' + pad(secs) + ' seconds'
  }
module.exports.run = async (client, message, args) => {
const info = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("GenZ Info")
.addField("Uptime",msToTime(client.uptime), true)
.addField(`GenZ has joined`, ` **${client.guilds.size}** server(s)`, true)
.addField(`GenZ has met`, `**${client.users.size}** users`, true)
.addField("Node.js version",`**${process.version}**`, true)
.addField("Discord.js version",`**v${Discord.version}**`, true)
let m = await message.channel.send({embed:info});
}