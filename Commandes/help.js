const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setDescription("**✔️ Voici la liste de commandes pour ce serveur :**")
        .addField("**__Administration :__**", "f!kick, f!ban, f!clear, f!delrole, f!addrole")
        .addField("**__Utilitaires :__**", "f!stats, f!info, f!ping, f!credit")
        .addField("Créateur du bot :", "Bot créé par Mio_Developpeur#5183")
        message.channel.send(help)
}

module.exports.help = {
    name: "help"
};