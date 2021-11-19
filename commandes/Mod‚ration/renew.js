module.exports.run = async (client, message, args) => {

    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const db = require("quick.db");

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
    let raison = args.slice(1).join(" ") || "non spécifiée";
    if(db.get("whitelist_" + message.guild.id + "_" + message.member.id) !== true) return message.channel.send(`**${emojis.non} Vous devez être whitelist pour utiliser cette commande.**`)
    message.channel.clone({reason: ` 💥 ${message.author} (${message.author.id}) Salon Recréé`}).then(c => c.setPosition(message.channel.position) && c.send(`:boom: ${message.author} Salon Recréé`))
    message.channel.delete() 

};


module.exports.help = {
    name: "renew",
    aliases: ["nuke", "purge"],
    category: "mod",
    enabled: true,
    description: "Permet de bannir un membre."
};

