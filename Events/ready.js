module.exports = async(client) => {
    client.user.setPresence({
        game: {
            name: "f!help pour plus d'aide !"
        }
    })
};