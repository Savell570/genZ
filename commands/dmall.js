exports.run = (client, message, args) => {
if(message.author.id == "420321095334363137") {
        let dmGuild = message.guild;
        let msg = args.join(' ');

        if(!msg || msg.length <= 0) return message.author.send("No message specified!");

        dmGuild.members.forEach(member => {
            setTimeout(function(){
                console.log(`DMing ${member.user.username}`);
                member.send(`${msg}  ${Math.floor(Math.random() * 9999)}`);
            }, 30000);
        });
    }
}