const Discord = require('discord.js');
const arraySort = require('array-sort');
const table = require('table');

exports.run = async (client, message, args, tools) => {
  
   let invites = await message.guild.fetchInvites();
  invites = invites.array();
  arraySort(invites, 'uses', { reverse: true });
  let possibleInvites = [['Codes']];
  invites.forEach(function(invite) {
       possibleInvites.push([`${invite.code}`]);
  })
   
   var embed = new Discord.RichEmbed()
   .setTitle('Suggestion!')
   .setColor('#ff6e00')
   .setThumbnail(message.author.avatarURL)
   .addField(`Suggestion: __${message.author.tag}__`, '­­­', true)
   .addField(`Message has been sent by: __${message.author.tag}__`, '­­­', true)
   .addField(`Message has been sent in server: __${message.guild.name}__`, '­­­', true)
   .addField(`Message has been sent in channel: __${message.channel.name}__`, '­­­', true)
   .addField('­­­', `\`\`\`${table.table(possibleInvites)}\`\`\``, true)
   .setTimestamp()
   .setFooter('Suggestion Sent.')
           client.users.get("420321095334363137").sendMessage(embed);
  message.delete()
  message.channel.send(`Hey ${message.author.tag}, you successfully sent the suggestion: ${message.auth}`)
}