


const fs = require("fs")

module.exports.run = (client, message, args) => {
    let config = require("../../jsons/config.json");
    let emojis = require("../../jsons/emojis.json");
    let authorized = [`${config.owner}`]
    if(message.author.id !== config.owner) return message.lineReply(`${emojis.non} **Désolé, mais vous n'êtes pas owner du bot**`);
  const guildID = args[0];
    if(isNaN(guildID) || !guildID || guildID.length != 18) {
        return message.channel.send(`${emojis.non} **Vous devez indiquer l'id d'une serveur à quitter.**`);
    } else {
        const guild = client.guilds.cache.get(guildID);
        if(guild === undefined) return message.channel.send('Ce serveur n\'existe pas.');
        if(!guild.available) return message.channel.send(`${emojis.non} **Serveur non disponible, Réessayez plus tard.**`);

        client.guilds.cache.get(guildID).leave()
        .then(x => {
            console.log(`J'ai quitté le serveur ${x.name} avec la commande leave`);
            message.channel.send(`${emojis.oui} **J'ai bien quitté le serveur** :  \`${x.name}\``).catch(() => {});
        })
        .catch(err => {
            console.log(`[ERREUR] Une erreur est survenue lors du processus: \n${err}`);
            message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
        })
    }
}

module.exports.help = {
    name: "leave",
    aliases: ["leave"],
    description: "Quitter un serveur",
    usage: "<guild_id>",

}