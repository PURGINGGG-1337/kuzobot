module.exports.run = async (client, message, args) => {

    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const db = require("quick.db");
    const ms = require("ms");
    const { MessageEmbed } = require('discord.js');
    fs = require('ms');
    if(db.get("whitelist_" + message.guild.id + "_" + message.member.id) !== true) return message.channel.send(`**${emojis.non} Vous devez être whitelist pour utiliser cette commande.**`)
     {
        message.guild.fetchBans().then(bans => {
            if (bans.size == 0) {message.channel.send(`${emojis.non} **Il n'y a aucun membre banni sur le serveur.**`); throw "**Aucun membre a unban.**"};
            bans.forEach(ban => {
                message.guild.members.unban(ban.user.id);                     
            })
        }).then(() => message.lineReply(`${emojis.oui} **Tous les utilisateurs bannis ont été débanni.**`)).catch(e => console.log(e))
    } 
}
    
    module.exports.help = {
        name: "unbanall",
        aliases: ["uball"],
        category: "mod",
        enabled: true,
        description: "Permet de réouvrir un salon textuel."
    };