const Discord = require("discord.js")
const config = require("../../jsons/config.json");
const db = require("quick.db")
const fs = require('fs')

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    const config = require("../../jsons/config.json");
    let authorized = [`${config.owner}`]
    const emojis = require("../../jsons/emojis.json");
  if(!authorized.includes(message.author.id)) return message.lineReply(`${emojis.non} **Désolé, mais vous n'êtes pas owner du bot**`);

  this.client = message.client;
        let i0 = 0;
        let i1 = 10;
        let page = 1;
        let description =
            `Nombre de serveurs : ${this.client.guilds.cache.size}\n\n` +
            this.client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).map((r) => r)
            .map((r, i) => `**${i + 1}** - ${r.name}・ \`(${r.id})\`・ \`[${r.memberCount}]\``)
            .slice(0, 10)
            .join("\n");
        const embed = new Discord.MessageEmbed()
            .setAuthor(`${this.client.user.username}`, this.client.user.displayAvatarURL())
            .setColor("303136")
        .setDescription(description);
        const msg = await message.channel.send(embed);
        await msg.react("⬅");
        await msg.react("➡");
        await msg.react("❌");
        const collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);
        collector.on("collect", async(reaction) => {
            if (reaction._emoji.name === "⬅") {
                // Updates variables
                i0 = i0 - 10;
                i1 = i1 - 10;
                page = page - 1;

                // if there is no guild to display, delete the message
                if (i0 < 0) {
                    return msg.delete();
                }
                if (!i0 || !i1) {
                    return msg.delete();
                }

                description = `Serveurs: ${this.client.guilds.cache.size}\n\n` +
                    this.client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).map((r) => r)
                    .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Membres`)
                    .slice(i0, i1)
                    .join("\n");

                // Update the embed with new informations
                embed.setTitle(`Page: ${page}/${Math.round(this.client.guilds.cache.size/10)}`)
                    .setDescription(description);
                // Edit the message 
                msg.edit(embed);
            }
            if (reaction._emoji.name === "➡") {

                // Updates variables
                i0 = i0 + 10;
                i1 = i1 + 10;
                page = page + 1;

                // if there is no guild to display, delete the message
                if (i1 > this.client.guilds.cache.size + 10) {
                    return msg.delete();
                }
                if (!i0 || !i1) {
                    return msg.delete();
                }
                description = `Serveurs: ${this.client.guilds.cache.size}\n\n` +
                    this.client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).map((r) => r)
                    .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} membres`)
                    .slice(i0, i1)
                    .join("\n");
                // Update the embed with new informations
                embed.setTitle(`Page: ${page}/${Math.round(this.client.guilds.cache.size/10)}`)
                    .setDescription(description);
                // Edit the message 
                msg.edit(embed);
            }
            if (reaction._emoji.name === "❌") {
                return msg.delete();
            }
            // Remove the reaction when the user react to the message
            await reaction.users.remove(message.author.id);
        });


}
  module.exports.help = {
    name: "serverlist",
    aliases: ["serveurlist", "server-list"],
    category: 'Administration',
    description: "Permet de changer le statut du Bot",
  };