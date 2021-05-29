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
.setTitle("GenZ Satus")

.setThumbnail(`https://media.discordapp.net/attachments/843359821905920021/848058160274341959/6360-trees-anime-manga-forest_1.jpg?width=1017&height=572`, ` **faf** server(s)`, true)

let m = await message.channel.send({embed:info});
}