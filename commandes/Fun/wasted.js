
const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");
const fs = require("fs");
module.exports.help = {
  name: "wasted",
  aliases: [],
  category: "Image",
  description: "!",
  usage: "Wasted | + membre",
};
module.exports.run = async(bot, message, args) => {

    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Data = await Random.Wasted({ Image: Member.user.displayAvatarURL({ format: "png" }), Color: `303136` });

    return message.channel.send(Data);
  }
