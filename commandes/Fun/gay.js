const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
        let member = message.mentions.users.first() || message.author
        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
        .setAuthor(`🌈 Détecteur de gay`)
        .setDescription(`${member} est ` + rng + "% Gay 🏳️‍🌈")
        .setColor("303136")
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))

        message.channel.send(howgayembed);
    }
    module.exports.help = {
        name: "gay",
        description: "calclculateur ",
    };    