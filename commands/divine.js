const Discord = require('discord.js');
const sneckfetch = require('snekfetch');
const api = 'https://jsonplaceholder.typicode.com/posts'

module.exports.run = async (bot, message, args) => {
  sneckfetch.get(api).then(r => {
   let body = r.body
   let id = args[0]
   if(!id) return message.channel.send('Supply an id please!');
    if(isNaN(id)) return message.channel.send('Supply a valid number!')
    let entry = body.find(post => post.id === id)
    if(!entry) return message.channel.send("This entry doesn't exist!");
    
    let embed = new Discord.RichEmbed()
    .setTitle(entry.body)
    message.channel.send(embed)
  })
}

module.exports.help = {
 name: 'divine' 
}