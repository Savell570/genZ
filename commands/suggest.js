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
    .setTitle("Suggestion!")
    .setColor("#ff6e00")
    .setThumbnail(message.author.avatarURL)
    .addField(`Suggestion: __${command}__`, "­­­", true)
    .addField(
      `Message has been sent by: __${message.author.tag}__`,
      "­­­",
      true
    )
    .addField(
      `Message has been sent in server: __${message.guild.name}__`,
      "­­­",
      true
    )
    .addField(
      `Message has been sent in channel: __${message.channel.name}__`,
      "­­­",
      true
    )
    .addField("­­­", `\`\`\`${table.table(possibleInvites)}\`\`\``, true)
    .setTimestamp()
    .setFooter("Suggestion Sent.");
  client.users.get("828294785650917456").sendMessage(embed);
  message.delete();
  message.channel.send(
    `*Hey* **__${message.author.tag}__**, *you* **successfully** *sent the suggestion:* **__${command}__** to **𝖗𝖊𝖙𝖆𝖗𝖉 𝕨𝕖𝕒𝕣𝕚𝕟𝕘 𝖓𝖎𝖓𝖏𝖆 ꜱʜᴏᴇꜱ#5484** !`
  );
};
