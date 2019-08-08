const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'READ_MESSAGES', 'ADD_REACTIONS', 'EMBED_LINKS', 'VIEW_CHANNEL', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'MANAGE_MESSAGES', 'MANAGE_WEBHOOKS'])
  .then(link => {
  message.reply("I got my invite link into your DMs!");
    message.author.send(`Generated bot invite link: ${link}`);
  });
  
};