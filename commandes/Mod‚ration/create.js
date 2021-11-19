module.exports.run = async (client, message, args) => {

    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const Discord = require("discord.js");
    const { parse } = require("twemoji-parser");
    const { MessageEmbed } = require("discord.js");
    const fs = require('fs');
    const db = require("quick.db");

    if(db.get("whitelist_" + message.guild.id + "_" + message.member.id) !== true) return message.channel.send(`**${emojis.non} Vous devez être whitelist pour utiliser cette commande.**`)

        const emoji = args[0];
        if (!emoji) return message.channel.send(`${emojis.warn} **Veuillez me donner un emoji !**`);

        let customemoji = Discord.Util.parseEmoji(emoji);

        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
      customemoji.animated ? "gif" : "png"
    }`;
            const name = args.slice(1).join(" ");
            message.guild.emojis
                .create(`${Link}`, `${name || `${customemoji.name}`}`)
      .catch((error) => {
        console.log(error);
      });

    const Added = new MessageEmbed()
      .setColor("303136")
      .setDescription(
        `${emojis.oui} L'emoji a été ajouté !・ Nom : \`${name || `${customemoji.name}`}\`・ Image : [Click ici](${Link})`);
    return message.channel.send(Added).catch((e) => {
      console.log(e);
    });
  } else {
    let CheckEmoji = parse(emoji, {
      assetType: "png",
    });
    if (!CheckEmoji[0])
      return message.channel.send(`${emojis.warn} **Veuillez me donner un emoji valide !**`);
    message.channel.send(
      `${emojis.non} **Merci de m'envoyer un emoji ne venant pas de discord.**`
    );
  }
};


module.exports.help = {
    name: "create",
    aliases: ["addemoji", "emojiadd"],
    category: "mod",
    enabled: true,
    description: "Permet de ajoute run emoji."
};