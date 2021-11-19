



module.exports.run = async (client, message, args) => {
    const { MessageEmbed } = require("discord.js");
    fs = require("fs");
    ms = require("ms");
    const emojis = require("../../jsons/emojis.json");

    const db = require("quick.db");
    const prefix = db.get(`prefix_${message.guild.id}`) || config.prefix;







    const msgembedee = new MessageEmbed()
    .setTitle("Mes commandes")
    .setAuthor(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setDescription(`${emojis.mp} Voici mon prefix :\`${prefix}\`
    ${emojis.fleched} J'ai un total de \`${client.commands.size}\` commandes !\n`)
    .addField(`${emojis.couronne}・Owner (11)`, `\`setprofile\`, \`setpresence\`, \`owner-list\`, \`owner\`, \`unowner\`, \`unwhitelist\`, \`whitelist\`, \`whitelist-list\`, \`whitelist-off\`, \`whitelist-on\`, \`serverlist\``)
    .addField(`${emojis.settings}・Administration (5)`, ` \`autorole\`, \`adminlist\`, \`massiverole\`, \`panel\`, \`set-prefix\``)
    .addField(`${emojis.warn}・Modération (19)`,   `\`renew\`, \`embed\`, \`lock\`, \`unlock\`, \`lockall\`,\`unlockall\`, \`kick\`, \`ban\`, \`banlist\`, \`clear\`, \`create\`, \`mute\`, \`unmute\`, \`tempmute\`, \`ban\`, \`unban\`, \`unbanall\`, \`warn\`, \`clearsanctions\`, \`warnings\``)
    .addField(`${emojis.protect}・Anti-Raid (14)`, `\`antiban-off\`, \`antiban-on\`, \`antibot-off\`, \`antiban-on\`, \`antichanell-off\`, \`antilink-off\`, \`antilink-on\`, \`antispam-off\`, \`antispam-on\`, \`antiwebhook-off\`, \`antiwebhook-on\``)
    .addField(`${emojis.logs} Logs (4)`, `\`logs-images\`, \`logs-mentions\`, \`logs-on\`, \`logs-off\`, \`logs-vocal\``)
    //.addField(`${emojis.backup}・Backup (3)`, `\`backup create\`, \`backup load\`, \`backup info\``)
    .addField(`${emojis.invite}・Invitations (7)`, `\`add-invites\`, \`del-invites\`, \`invites\`, \`join-message\`,  \`leave-message\`, \`join-channel\`, \`leave-channel\``)
    //.addField(`🎁・Giveaway (2)`, `\`gstart/gcreate\`, \`greroll\``)
    .addField(`:video_game:・Watch Together (3)`, `\`betrayal\`, \`youtube\`, \`poker\``)
    //.addField(`<:DisqueMusique:849115561682272327>・Music (1)`, `\`join\` _En cours.._`)
    //.addField(`${emojis.fun}・Fun (9)`, `\`avatar\`, \`ph\`, \`ascii\`, \`gaypic\`, \`gay\`, \`wasted\`, \`gif\`, \`insta\`, \`wasted\``)
    .addField(`${emojis.tools}・Utilitaires (7)`,  `\`invite\`, \`help\`, \`emojis-list\`, \`speed\`, \`userinfo\`, \`serverinfo\`, \`vc\``)
    .setFooter(client.user.username)
    .setColor("303136")
    .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
    .setTimestamp()  

          message.lineReply(msgembedee)
};


module.exports.help = {
    name: "help",
    aliases: [],
    category: 'Gestion de serveur',
    description: "- Permet d'afficher le panel de configuration de l'autorole.",
  };