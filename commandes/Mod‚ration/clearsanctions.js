module.exports.run = async (client, message, args, channel, guild) => {

    const db = require("quick.db");
    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");

    let author = message.mentions.members.first();
    let member = message.mentions.members.first();

    if(db.get("whitelist_" + message.guild.id + "_" + message.member.id) !== true) return message.channel.send(`**${emojis.non} Vous devez être whitelist pour utiliser cette commande.**`)


        const user = message.mentions.members.first()
    
        if(!user) {
        }
        
        if(message.mentions.users.first().bot) {
        }
        
        if(message.author.id === user.id) {
        }
        
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
        
        if(warnings === null) warnings = 0;
        
        db.delete(`warnings_${message.guild.id}_${user.id}`)
        user.send(`${emojis.oui} **Tous vos avertissements ont été réinitialiser par** ${message.author.username} **sur** ${message.guild.name}`)
        await message.channel.send(`${warnings} **Sanction supprimée pour l'utilisateur** ${message.mentions.users.first().username}`)  
    
    

};

module.exports.help = {
    name: "clearsanctions",
    aliases: ["clearwarns"],
    category: "mod",
    enabled: true,
    description: "Permet de unwhitelist un membre."
};