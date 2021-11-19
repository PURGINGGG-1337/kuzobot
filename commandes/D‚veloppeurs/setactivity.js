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

 

   filter = (reaction, user) => ['1️⃣', '2️⃣','3️⃣','4️⃣' , '❌'].includes(reaction.emoji.name) && user.id === message.author.id,
   dureefiltrer = response => { return response.author.id === message.author.id };

   const msgembed = new MessageEmbed()
   .setAuthor(`Modifier l'activité du bot` , client.user.displayAvatarURL({ dynamic : true }))
   .setColor("303136")
   .setDescription(`\`1️⃣\` **Stream**\n\n\`2️⃣\` **Watch**\n\n\`3️⃣\` **Listen**\n\n\`4️⃣\` **Play**\n\n\`❌\` **Supprimer l'activité du bot**`)

   .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))

    message.channel.send(msgembed)
    .then(async m => {
const collector = m.createReactionCollector(filter, { time: 900000 });
collector.on('collect', async (r , reaction) => { 
    if (r.emoji.name === '1️⃣') {
        message.channel.send(`Veuillez entrer l'activité que vous voulez définir pour votre bot.`).then(mp => {
            mp.channel.awaitMessages(dureefiltrer, { max: 1, time: 60000, errors: ['time'] })
        
            .then((cld) => {
            var msg = cld.first();


        client.user.setPresence({ activity: { name: msg.content, type: 1, url: "https://www.twitch.tv/tools"}})
        .then(p => message.channel.send(`Vous avez définis le statut de votre bot en \`${msg.content}\` (**Streaming**).`))
        .catch(e => { return message.channel.send(`Une erreur a été rencontré.  **Plus d'informations:** \`🔻\` \`\`\`${e}\`\`\``) });
            
                const msgembede = new MessageEmbed()
                .setAuthor(`Modifier l'activité du bot` , client.user.displayAvatarURL({ dynamic : true }))
                .setColor("303136")
                .setDescription(`\`1️⃣\` **Stream**\n\n\`2️⃣\` **Watch**\n\n\`3️⃣\` **Listen**\n\n\`4️⃣\` **Play**\n\n\`❌\` **Supprimer l'activité du bot**`)

      
                .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))

            m.edit(msgembede);         
        });
        })
    } else if(r.emoji.name === '2️⃣') {
        message.channel.send(`Veuillez entrer l'activité que vous voulez définir pour votre bot.`).then(mp => {
            mp.channel.awaitMessages(dureefiltrer, { max: 1, time: 30000, errors: ['time'] })
            .then(cld => {
            var str = cld.first();
           
            client.user.setPresence({ activity: { name: str.content, type: "WATCHING" }, status: 'idle' })
            .then(p => message.channel.send(`Vous avez définis le statut de votre bot en \`${str.content}\` (**Watching**).`))
        .catch(e => { return message.channel.send(`Une erreur a été rencontré.  **Plus d'informations:** \`🔻\` \`\`\`${e}\`\`\``); });
            
                const msgembede = new MessageEmbed()
                .setAuthor(`Modifier l'activité du bot` , client.user.displayAvatarURL({ dynamic : true }))
                .setColor("303136")
                .setDescription(`\`1️⃣\` **Stream**\n\n\`2️⃣\` **Watch**\n\n\`3️⃣\` **Listen**\n\n\`4️⃣\` **Play**\n\n\`❌\` **Supprimer l'activité du bot**`)

        
                .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))

            m.edit(msgembede); 
        });
        });
    } else if(r.emoji.name === '3️⃣') {
        message.channel.send(`Veuillez entrée l'activitter que vous voulez definir pour votre bot`).then(mp => {

            mp.channel.awaitMessages(dureefiltrer, { max: 1, time: 30000, errors: ['time'] })
            .then(cld => {
            var stre = cld.first();
           
            client.user.setPresence({ activity: { name: stre.content, type: "LISTENING" }, status: 'idle' })
            .then(p => message.channel.send(`Vous avez définis le statut de votre bot en \`${stre.content}\` (**Listening**).`))
        .catch(e => { return message.channel.send(`Une erreur a été rencontré.  **Plus d'informations:** \`🔻\` \`\`\`${e}\`\`\``); });
            
                const msgembede = new MessageEmbed()
                .setAuthor(`Modifier l'activité du bot` , client.user.displayAvatarURL({ dynamic : true }))
                .setColor("303136")
                .setDescription(`\`1️⃣\` **Stream**\n\n\`2️⃣\` **Watch**\n\n\`3️⃣\` **Listen**\n\n\`4️⃣\` **Play**\n\n\`❌\` **Supprimer l'activité du bot**`)

              
                .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))

            m.edit(msgembede); 
                
            });
        });
    } else if(r.emoji.name === '4️⃣') {
        message.channel.send(`Veuillez entrée l'activitter que vous voulez definir pour votre bot`).then(mp => {

            mp.channel.awaitMessages(dureefiltrer, { max: 1, time: 30000, errors: ['time'] })
            .then(cld => {
            var stree = cld.first();
           
            client.user.setPresence({ activity: { name: stree.content }, status: 'idle' })
            .then(p => message.channel.send(`Vous avez définis le statut de votre bot en \`${stree.content}\` (**Playing**).`))
        .catch(e => { return message.channel.send(`Une erreur a été rencontré.  **Plus d'informations:** \`🔻\` \`\`\`${e}\`\`\``); });
            
                const msgembede = new MessageEmbed()
                .setAuthor(`Modifier l'activité du bot` , client.user.displayAvatarURL({ dynamic : true }))
                .setColor("303136")
                .setDescription(`\`1️⃣\` **Streaming**\n\n\`2️⃣\` **Watch**\n\n\`3️⃣\` **Listen**\n\n\`4️⃣\` **Play**\n\n\`❌\` **Supprimer l'activité du bot**`)

                .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))

            m.edit(msgembede); 
                
            });
        });    } else if(r.emoji.name === '❌') {
            message.channel.send(`Vous avez supprimer l'activité de votre bot.`)

               
                client.user.setPresence({ activity: { name: "",  } })

                
                m.delete(); 
          
         
        } 
 

});
    await m.react("1️⃣")
    await m.react("2️⃣")
    await m.react("3️⃣")
    await m.react("4️⃣")
    await m.react("❌")


})

};


module.exports.help = {
    name: "setpresence",
    aliases: ['setactivity'],
    category: 'Gestion de serveur',
    description: "- Permet d'afficher le panel de configuration des giveaways.",
  };