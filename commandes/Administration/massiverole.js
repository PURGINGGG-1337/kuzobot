module.exports.run = async (client, message, args) => {

    const db = require("quick.db");
    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const Discord = require('discord.js')
    const fs = require("fs");

    if(db.get("whitelist_" + message.guild.id + "_" + message.member.id) !== true) return message.channel.send(`**${emojis.non} Vous devez être whitelist pour utiliser cette commande.**`)
      if (!args.length) {
        return message.channel.send(`${emojis.non} Vous avez mal utilisé la commande: \`masiverole add/remove <role>\``)
      }
      if(db.get("whitelist_" + message.guild.id + "_" + message.member.id) !== true) return message.channel.send(`**${emojis.non} Vous devez être whitelist pour utiliser cette commande.**`)
    if(args[0] === "add") {
        const role =
        message.guild.roles.cache.find(
          (role) => role.name === args.join(" ").slice(1)
        ) || message.mentions.roles.first() || message.guild.roles.cache.get(args.join(" ").slice(1));
  
      if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
        return message.channel.send(`${emojis.non} **Mon rôle n'est pas assez haut pour que j'ajoute le rôle ${role} !`);
      }
  
      if (message.member.roles.highest.comparePositionTo(role) < 0) {
        return message.channel.send(`${emojis.non} **Votre rôle doit être supérieur à ${role}`);
      }
  
      if (!role) {
        return message.channel.send(`${emojis.wsh_ta_cru_quoi} **Veuillez fournir un rôle valide**`);
      }
  
      message.guild.members.cache.forEach(member => member.roles.add(role));
  
      message.channel.send(`${emojis.oui} ${role}  **a bien été ajouté à tout le monde**`);    
    }
    if(args[0] === "remove") {
        const role =
        message.guild.roles.cache.find(
          (role) => role.name === args.join(" ").slice(1)
        ) || message.mentions.roles.first() || message.guild.roles.cache.get(args.join(" ").slice(1));
  
      if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
        return message.channel.send(`${emojis.non} **Mon rôle n'est pas assez haut pour que j'enlève le rôle** ${role}!`);
    }

    if (message.member.roles.highest.comparePositionTo(role) < 0) {
      return message.channel.send(`${emojis.non} **Votre rôle doit être supérieur à** ${role}`);
      }
  
      if (!role) {
        return message.channel.send(`${emojis.warn} **Veuillez fournir un rôle valide**`);
      }
  
      message.guild.members.cache.forEach(member => member.roles.remove(role));
  
      message.channel.send(`${emojis.oui} ${role} **a bien été enlever à tout le monde**`);    
    }
}

module.exports.help = {
    name: "massiverole",
    aliases: ["giveall"],
    category: "admin",
    enabled: true,
    description: "Permet de lock un channel."
};