require('dotenv').config();

PREFIX = process.env.CLIENT_PREFIX
ACTIVITY = process.env.CLIENT_ACTIVITY

module.exports = async(client) => {

    console.log(`I am preparing to start....`);
    console.log(`I am ready! Logged in as ${client.user.tag}!`);

    client.user.setActivity(`${ACTIVITY} in ${client.guilds.cache.size} servers`)
        .then(console.log(`${client.user.tag} has started in ${client.guilds.cache.size} servers`))
        .catch(err => {
            console.error(err);
        });

};