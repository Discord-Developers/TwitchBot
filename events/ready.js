require('dotenv').config;
PREFIX = process.env.CLIENT_PREFIX

module.exports = async (client) => {
    client.on("ready", (cli, members, channels, guilds)=> {
        
        console.log(`I am preparing to start....`);
        console.log(`I am ready! Logged in as ${client.user.tag}!`);
        console.log(`${client.user.tag} has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);

        client.user.setActivity(`${PREFIX}help for ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    })

};
