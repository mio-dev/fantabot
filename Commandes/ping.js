const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    let début = Date.now();
    await message.channel.send("Ping").then(async(m)  => await m.edit(`Votre ping sur le serveur **Fantasia** est de : __${Date.now() - début}__ ms`));

};

module.exports.help = {
    name: "ping"
}