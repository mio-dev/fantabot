const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setDescription("**Voici les informations utiles pour le serveur Fantasia !**")
        .addField("**__Ip Fantasia :__**", "En maintenance !")
        .addField("**__État du serveur :__**", "Whitelist !")
        .addField("**__News :__**", "Rien pour le momment...")
        message.channel.send(help)
}

module.exports.help = {
    name: "info"
};