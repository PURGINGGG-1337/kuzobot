
const fs = require("fs");
const Random = require("srod-v2");
const Discord = require("discord.js");

  module.exports.run = async (client, message, args) => {

    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Data = await Random.Gay({ Image: Member.user.displayAvatarURL({ format: "png" }), Color: 303136, });

    return message.channel.send(Data);
    
     }
 

module.exports.help = {
    name: "gaypic",
    category: 'Fun',
    description: ".",

  };