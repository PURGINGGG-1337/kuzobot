module.exports.run = async (client, message, args) => {

    const db = require("quick.db");
    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const Discord = require('discord.js')
    const ms = require('ms')
    fs = require("fs");
  

    if(db.get("whitelist_" + message.guild.id + "_" + message.member.id) !== true) return message.channel.send(`**${emojis.non} Vous devez être whitelist pour utiliser cette commande.**`)
    if (!message.mentions.channels.first()) return message.channel.send(`${emojis.non} **Spécifiez le channel**`)
    

    if (!message.guild.me.hasPermission) {
        return message.lineReply(` ${emojis.non} **Vous n'avez pas la permission d'unlock le salon**` )
    }


    let time = args[1] || "30s"
    let Channel = message.mentions.channels.first()

    try {
        await Channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        });

        message.channel.send(`${emojis.channel} <#${Channel.id}> **à bien était unlock !(())`)
    } catch (err) {
        console.log(err);
    }

    setTimeout(() => {
        Channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: true
        }, ms(time))
    })
}

module.exports.help = {
    name: "unlock",
    aliases: [],
    category: "admin",
    enabled: true,
    description: "Permet de unlock un channel."
};