const { MessageEmbed } = require("discord.js"), 
fs = require("fs"), 
ms = require("ms"),

db = require("quick.db");

module.exports.run = async (client, message, args) => {
    let config = require("../../jsons/config.json");
    let emojis = require("../../jsons/emojis.json");
    if(!message.guild) return;
    let authorized = [`${config.owner}`]
    if(!authorized.includes(message.author.id)) return message.lineReply(`${emojis.non} **Désolé, mais vous n'êtes pas owner du bot**`);
 

   filter = (reaction, user) => ['1️⃣', '2️⃣', '❌'].includes(reaction.emoji.name) && user.id === message.author.id,
   dureefiltrer = response => { return response.author.id === message.author.id };

   const msgembed = new MessageEmbed()
   .setAuthor(`Modifier le profile du bot` , client.user.displayAvatarURL({ dynamic : true }))
   .setColor("303136")
   .setDescription(`\`1️⃣\` **Pseudo**\n${client.user.username}\n\n\`2️⃣\` **Avatar**\n[Photo de profile](${ client.user.displayAvatarURL({ dynamic : true })})\n\n\`❌\` **Annuler**`)
   .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))


    message.channel.send(msgembed)
    .then(async m => {
const collector = m.createReactionCollector(filter, { time: 900000 });
collector.on('collect', async r => { 
    if (r.emoji.name === '1️⃣') {
   message.channel.send(`\`1️⃣\` **Veuillez entrée le pseudonyme que vous voulez definir pour votre bot.**`).then(mp => {
            mp.channel.awaitMessages(dureefiltrer, { max: 1, time: 60000 , errors: ['time'] })
            .then(cld => {
            var msg = cld.first();
            client.user.setUsername(msg.content)
            .then(u => message.channel.send(`${emojis.oui} ${message.author}, **Vous avez changé le pseudonyme de votre bot.**`))
            .catch(e => { return message.channel.send(`${emojis.warn} ${message.author}, **Une erreur a été rencontré.** \n **Plus d'informations:** \`🔻\` \`\`\`${e}\`\`\``); });
            
                const msgembede = new MessageEmbed()
                .setAuthor(`Modifier le profile du bot` , client.user.displayAvatarURL({ dynamic : true }))
                .setColor("303136")
                .setDescription(`\`1️⃣\` **Pseudo**\n${msg.content}\n\n\`2️⃣\` **Avatar**\n[Avatar url](${ client.user.displayAvatarURL({ dynamic : true })})\n\n\`❌\` **Annuler**`)
                .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))

            
            m.edit(msgembede);         
        });
        })
    // --
    } else if(r.emoji.name === '2️⃣') {
        message.channel.send(`\`2️⃣\` **Veuillez entrée la photo de profile que vous voulez mettre pour le bot.**`).then(mp => {
            mp.channel.awaitMessages(dureefiltrer, { max: 1, time: 6000, errors: ['time'] })
            .then(cld => {
            var str = cld.first();
           message.delete()
            client.user.setAvatar(str.content)
            .then(u => message.channel.send(`${emojis.oui}  ${message.author}, **Vous avez changé la photo de profil de votre bot.**`))
            .catch(e => { return message.channel.send(`${emojis.warn} ${message.author}, **Une erreur a été rencontré.** \n **Plus d'informations:** \`🔻\` \`\`\`${e}\`\`\``); });
            
                const msgembede = new MessageEmbed()
                .setAuthor(`Modifier le profile du bot` , client.user.displayAvatarURL({ dynamic : true }))
                .setColor("303136")
                .setDescription(`\`1️⃣\` **Pseudo**\n${client.user.username}\n\n\`2️⃣\` **Avatar**\n[Avatar url](${str.content})\n\n\`❌\` **Annuler**`)
                .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))

           
            m.edit(msgembede); 
        });
        });
    } else if(r.emoji.name === '❌') {
     m.delete()
   
   
        } 
 

});
    await m.react("1️⃣")
    await m.react("2️⃣")
    await m.react("❌")


})

};


module.exports.help = {
    name: "setprofile",
    aliases: ['setbot'],
    category: 'Gestion de serveur',
    description: "- Permet d'afficher le panel de configuration des giveaways.",
  };