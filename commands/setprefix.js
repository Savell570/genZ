/**
 * @file setPrefix command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */
const fs = require('fs');
const config = require("../config.json")

exports.exec = async (message, args) => {

fs.writeFile("./prefix.txt", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
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