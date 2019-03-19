const Discord = require('discord.js');
const arraySort = require('array-sort');
const table = require('table');

exports.run = async (client, message, args, tools) => {
  let invites = await message.guild.fetchInvites();
  invites = invites.array();
  arraySort(invites, 'uses', { reverse: true });
  let possibleInvites = [['User', 'Uses']];
  invites.forEach(function(invite) {
  
  })
}