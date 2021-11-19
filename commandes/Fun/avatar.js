const Discord = require("discord.js");
const fs = require('fs');
const emojis = require("../../jsons/emojis.json");

module.exports.run = async(bot, message, args) => {

    let mentionedUser = message.mentions.users.first() || message.author;
    let avatarembed = new Discord.MessageEmbed()

    .setImage(mentionedUser.displayAvatarURL({dynamic: true, size: 512}))
    .setColor("303136")
    .setAuthor("Avatar de "+mentionedUser.username)
    .setFooter("Demandé par " + message.author.tag)
    .setTimestamp()  
    .setDescription("[Lien de l'avatar]("+ mentionedUser.displayAvatarURL({dynamic: true, size: 512}) +")")

    message.channel.send(avatarembed)
};
    
module.exports.help = {
    name: "avatar",
    aliases: ['pic'],
    category: 'Fun',
    description: "Affiche la photo de profile de la mention",
};