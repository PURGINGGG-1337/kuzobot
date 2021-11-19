module.exports.run = async (client, message, args) => {

    const db = require("quick.db");
    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");

    if(message.member.hasPermission("ADMINISTRATOR")) {

        if(db.get("antilink_" + message.guild.id) !== "on") return message.channel.send(`**${emojis.non} L'anti liens est déja désactivé.**`)
        
        let embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(`${emojis.oui} Succès :`)
        .setDescription(`**${emojis.fleched} L'anti liens a bien été désactivé.**`)
        .setColor("303136")
        .setFooter(client.user.username)

        db.set("antilink_" + message.guild.id, "off")
        return message.channel.send(embed)

    } else {

        return message.channel.send(`**${emojis.non} Vous n'avez pas la permission nécessaire pour utiliser cette commande.**`)

    }

};

module.exports.help = {
    name: "antilink-off",
    aliases: [],
    category: "antiraid",
    enabled: true,
    description: "Permet de désactiver le système d'anti liens."
};