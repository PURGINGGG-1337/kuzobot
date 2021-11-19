module.exports.run = async (client, message, args, channel, guild) => {

    const db = require("quick.db");
    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const Discord = require("discord.js");
    fs = require("fs");


    if(db.get("whitelist_" + message.guild.id + "_" + message.member.id) !== true) return message.channel.send(`**${emojis.non} Vous devez être whitelist pour utiliser cette commande.**`)

    message.delete()
    if (!args.join(" ")) return message.lineReply("Rentrez votre question !");
    let firstPollEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
    let secondPollEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
        .setColor("303136")
        .setDescription(`**Le sondage:** \n \`\`\`\n${args.join(" ")}\n\`\`\``)
    message.channel.send(firstPollEmbed).then((message) => {
        setTimeout(function() {
            message.edit(secondPollEmbed).then(sentMessage => {
                sentMessage.react(`${emojis.un}` )
                sentMessage.react(`${emojis.deux}`)
            }).catch(error => {
                message.channel.send(`${emojis.warn} **Une erreur s'est produite lors de l'exécution de votre commande:**\n\`${error}\``)
            })
        }, 2000)
    }).catch(error => {
        message.channel.send(`${emojis.warn} **Une erreur s'est produite lors de l'exécution de votre commande:**\n\`${error}\``)
    })
}

module.exports.help = {
    name: "sondage",
    aliases: ["poll"],
    category: "mod",
    enabled: true,
    description: "Permet de faire un sondage."
};