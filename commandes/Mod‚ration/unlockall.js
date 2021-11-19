module.exports.run = async (client, message, args) => {

    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
if(db.get("whitelist_" + message.guild.id + "_" + message.member.id) !== true) return message.channel.send(`**${emojis.non} Vous devez être whitelist pour utiliser cette commande.**`)
    if(!message.guild.members.cache.get(client.user.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**${emojis.non} Il me manque des permissions.**`)
    
    message.guild.channels.cache.forEach(channel => {
        channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: true })
    });

    let embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setTitle(`${emojis.oui} Succès :`)
    .setDescription(`**${emojis.fleched} Tous les salons ont été réouverts.**`)
    .setColor("303136")
    .setFooter(client.user.username)

    message.channel.send(embed)

};

module.exports.help = {
    name: "unlockall",
    aliases: [],
    category: "mod",
    enabled: true,
    description: "Permet de réouvrir tous les salons textuels du serveur."
};