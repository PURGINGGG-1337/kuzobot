module.exports.run = async (client, message, args) => {

    const db = require("quick.db");
    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const prefix = require("quick.db").get(`prefix_${message.guild.id}`) || config.prefix;

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(`${emojis.non} **Désolé, mais vous n'avez pas la permission requise pour executer cette commande.**`);
 
             filter = (reaction, user) => ['👥', '2️⃣','3️⃣'].includes(reaction.emoji.name) && user.id === message.author.id,
        dureefiltrer = response => { return response.author.id === message.author.id };
     
        const msgembed = new MessageEmbed()
        .setTitle(`${emojis.fleched} Paramètres de l'autorole`)
        .setDescription(`Veuillez cliquer sur la réaction \`👥\`ci-contre pour configurer l\'autorole`)
        .setTimestamp()
        .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
        .setColor("303136")
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
         message.channel.send(msgembed)
         .then(async m => { 
     const collector = m.createReactionCollector(filter, { time: 900000 });
     collector.on('collect', async r => { 

                if(r.emoji.name === "👥") {
                    message.channel.send(`${emojis.backup} **Veuillez entrée l'ID ou mentionner le rôle**`).then(mp => {
                        mp.channel.awaitMessages(dureefiltrer, { max: 1, time: 30000, errors: ['time'] })
                        .then(cld => {
                        var msg = cld.first();
                        var role = message.guild.roles.cache.get(msg.content) || msg.mentions.roles.first()
                        if(!role) return  message.channel.send(`Rôle incorrect.`);
                        db.set("autorole_role_" + message.guild.id, role.id)
                        
                                     message.channel.send(`${emojis.settings} **Vous venez de changer le rôle en \`${role.name}\`**`)
                                     m.edit({ embed: { title: `${emojis.fleched}  Configuration de L'autorole`, description: 'Veuillez cliquer sur la réaction \`👥\`ci-contre pour configurer l\'autorole',  } });         
                                    });
                  

                                
                                        
                                
                                
                });
       
         }
     });
     await m.react("👥")

         });

};

module.exports.help = {
    name: "autorole",
    aliases: [],
    category: "admin",
    enabled: true,
    description: "Permet de modifier le préfixe du bot."
};