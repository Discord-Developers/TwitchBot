require('dotenv').config;
PREFIX = process.env.CLIENT_PREFIX;
ACTIVITY = process.env.CLIENT_ACTIVITY;

module.exports = async (client) => {
    client.on("ready", (client)=> {
        
        console.log(`I am preparing to start....`);
        console.log(`I am ready! Logged in as ${client.user.tag}!`);
        console.log(`${client.user.tag} has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);

        client.user.setActivity(`${ACTIVITY} in ${client.guilds.cache.size} guilds.`);
    })

};
