module.exports.run = async (client, message, args) => {

    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const Discord = require('discord.js');
    const fs = require('fs')
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` ${emojis.non} Désolé, mais vous n'avez pas la permission requise pour executer cette commande.`);
    
        let bots = message.guild.members.cache.filter(m => m.user.bot).size;
        let noms = message.guild.members.cache.filter(m => m.user.bot).map(m => `\n\`${m.user.id}\` : <@${m.user.id}>`).join("");
        
        var embed = new Discord.MessageEmbed()
        .setTitle(`${emojis.fleched} Liste des bots sur ${message.guild} (${bots})`)
        .setAuthor(client.user.username,client.user.displayAvatarURL({dynamic : true }))
        .setDescription(noms)
        .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
        .setColor ("303136")
        message.channel.send(embed)
    };


module.exports.help = {
    name: "botlist",
    aliases: ["listbot"]
};