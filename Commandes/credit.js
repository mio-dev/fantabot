const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setDescription("Voici la liste des développeurs :")
        .addField("**Responsable développeur :**", "Mio_Developpeur#5183")
        .addField("**Développeur :**", "_Aucun pour le moment !_")
        .addField("**Ceux en test :**", "'Migo#2955")
        .addField("**Ceux en cours de candidature :**", "Qualeex#6789")
        message.channel.send(help)
}

module.exports.help = {
    name: "credit"
};