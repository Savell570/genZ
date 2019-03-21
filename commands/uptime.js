const Discord = require('discord.js')
const memory = require("memory")
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
let mb = memory();
const info = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("LXBot Info")
.addField("Uptime",msToTime(client.uptime), true)
.addField(`LXBot has joined`, ` **${client.guilds.size}** server(s)`, true)
.addField(`LXBot has met`, `**${client.users.size}** users`, true)
.addField("Node.js version",`**${process.version}**`, true)
.addField("Discord.js version",`**v${Discord.version}**`, true)
.addField("LXBot has used up",`**${mb}** MB`, true)
.addField("Helper:",`⠀⠀⠀⠀⠀⠀⠀Ne`, true)
let m = await message.channel.send({embed:info})
const info2 = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("LXBot Info")
.addField("Uptime",msToTime(client.uptime), true)
.addField(`LXBot has joined`, ` **${client.guilds.size}** server(s)`, true)
.addField(`LXBot has met`, `**${client.users.size}** users`, true)
.addField("Node.js version",`**${process.version}**`, true)
.addField("Discord.js version",`**v${Discord.version}**`, true)
.addField("LXBot has used up",`**${mb}** MB`, true)
.addField("Helper:",`⠀⠀Neko`, true)
await m.edit(info2)
const info3 = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("LXBot Info")
.addField("Uptime",msToTime(client.uptime), true)
.addField(`LXBot has joined`, ` **${client.guilds.size}** server(s)`, true)
.addField(`LXBot has met`, `**${client.users.size}** users`, true)
.addField("Node.js version",`**${process.version}**`, true)
.addField("Discord.js version",`**v${Discord.version}**`, true)
.addField("LXBot has used up",`**${mb}** MB`, true)
.addField("Helper:",`⠀Nekof`, true)
await m.edit(info3)
const info4 = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("LXBot Info")
.addField("Uptime",msToTime(client.uptime), true)
.addField(`LXBot has joined`, ` **${client.guilds.size}** server(s)`, true)
.addField(`LXBot has met`, `**${client.users.size}** users`, true)
.addField("Node.js version",`**${process.version}**`, true)
.addField("Discord.js version",`**v${Discord.version}**`, true)
.addField("LXBot has used up",`**${mb}** MB`, true)
.addField("Helper:",`Nekofu`, true)
await m.edit(info4)
const info5 = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("LXBot Info")
.addField("Uptime",msToTime(client.uptime), true)
.addField(`LXBot has joined`, ` **${client.guilds.size}** server(s)`, true)
.addField(`LXBot has met`, `**${client.users.size}** users`, true)
.addField("Node.js version",`**${process.version}**`, true)
.addField("Discord.js version",`**v${Discord.version}**`, true)
.addField("LXBot has used up",`**${mb}** MB`, true)
.addField("Helper:",`ekofur`, true)
await m.edit(info5)
const info6 = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("LXBot Info")
.addField("Uptime",msToTime(client.uptime), true)
.addField(`LXBot has joined`, ` **${client.guilds.size}** server(s)`, true)
.addField(`LXBot has met`, `**${client.users.size}** users`, true)
.addField("Node.js version",`**${process.version}**`, true)
.addField("Discord.js version",`**v${Discord.version}**`, true)
.addField("LXBot has used up",`**${mb}** MB`, true)
.addFie