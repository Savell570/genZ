/**
 * @file setPrefix command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */
const fs = require('fs');
const config = require("../config.json")

exports.exec = async (message, args) => {
  
 fs.editFile('./config.json', 'utf-8', function(err, data){
    if (err) throw err;

    console.log(typeof(data)); // string

    data.replace(/\.\/+/, '-');

}); 
};

exports.help = {
  name: 'setPrefix',
  description: 'Sets %bastion%\'s prefix for the server.',
  botPermission: '',
  userTextPermission: 'MANAGE_GUILD',
  userVoicePermission: '',
  usage: 'setPrefix < prefix | --default >',
  example: [ 'setPrefix !', 'setPrefix --default' ]
};