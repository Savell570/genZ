const Discord = require('discord.js');
const arraySort = require('array-sort');
const table = require('table');

exports.run = async (client, message, args, tools) => {
   let command = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
  let invites = await message.guild.fetchInvites();
  invites = invites.array();
  arraySort(invites, 'uses', { reverse: true });
  let possibleInvites = [['Vote']];
  invites.forEach(function(invite) {
       possibleInvites.push([invites.vote]);
  })
   
   var embed = new Discord.RichEmbed()
   .setTitle('Suggestion!')
   .setColor('#ff6e00')
   .setThumbnail(message.author.avatarURL)
   .addField(`Message has been sent by: ${message.author.tag}`)
   .addField(`Message has been sent in server: ${message.guild.name}`)
   .addField(`Message has been sent in channel: ${message.channel.name}`)
   .addField('Invite', `${possibleInvites}`)
   .setTimestamp()
   .setFooter('Suggestion Sent.')
   message.channel.send(embed)
           client.users.get("420321095334363137").sendMessage('hey');
}