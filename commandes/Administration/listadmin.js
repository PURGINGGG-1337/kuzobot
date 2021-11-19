module.exports.run = async (client, message, args) => {

    const db = require("quick.db");
    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js"); 
    const Discord = require("discord.js");
    const fs = require('fs')


    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` ${emojis.non} Désolé, mais vous n'avez pas la permission requise pour executer cette commande.`);

    var str_filtrer = message.guild.members.cache.filter(member => member.hasPermission("ADMINISTRATOR"))
    var str_map = str_filtrer.map(m => `<@${m.user.id}> : ${m.user.id}`).join("\n")
    for(let i = 0; i < str_map.length; i += 1995) {
        const str_content = str_map.substring(i, Math.min(str_map.length, i + 1995));
        message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(client.user.username,client.user.displayAvatarURL({dynamic : true }))
            .setTitle(`${emojis.fleched} Liste des admins présents (**${str_filtrer.size}**)`)
            .setDescription(`\n${str_content}`)
            .setColor("303136")
            .setTimestamp()
            .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
        )
    }
    };
        
        
        module.exports.help = {
            name: "adminlist",
            aliases: ["listeadmin", "la"],
            category: "admin",
            description: "Liste des administrateur",
          };