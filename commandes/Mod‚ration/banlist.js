module.exports.run = async (client, message, args) => {

    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const db = require("quick.db");
    const fs = require("fs");


    if (!message.guild.available) return this.client.logger.info(`Serveur "${message.guild.name}" (${message.guild.id}) est indisponible.`);
   // if(db.get("whitelist_" + message.guild.id + "_" + message.member.id) !== true) return message.channel.send(`**${emojis.non} Vous devez être whitelist pour utiliser cette commande.**`)

   if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` ${emojis.non} Désolé, mais vous n'avez pas la permission requise pour executer cette commande.`);
   
    message.guild.fetchBans()
    .then(bans => {
      const obj = bans.map(c => ({
        user: `\`${c.user.id}\` : <@${c.user.id}>`
      }));
      const bList = Array.from(obj);
      if (bList.length < 1) return message.channel.send(`Il n'y a aucun utilisateur banni sur **${message.guild.name}**.`);
      let index = 0;

      const embed = new MessageEmbed()
          .setTitle(`${emojis.fleched} Liste des membres ban de ${message.guild.name} (**${++index}**) `)
          .setAuthor(client.user.username,client.user.displayAvatarURL({dynamic : true }))
          .setDescription(`${bList.map(bl => `\n${bl.user}`).join("")}`)
          .setFooter(client.user.username, config.image)
          .setTimestamp()  
          .setColor("303136")
     
          message.channel.send(embed)
    });
  }

  module.exports.help = {
    name: "banlist",
    aliases: [],
    category: "mod",
    enabled: true,
    description: "Permet de voir la list des membres bannie du serveur."
};