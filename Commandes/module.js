const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setDescription("Voici la liste des différents modules :")
        .addField("**discord.js**", "Ce qui permet d'allumer le bot")
        .addField("**fs**","Ce module permet de savoir la latence sur le serveur (ping)")
        .addField("**moment**", "Ce module tout sur vous :)")
        message.channel.send(help);
}

module.exports.help = {
    name: "module"
}