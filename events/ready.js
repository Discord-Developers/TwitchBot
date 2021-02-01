require('dotenv').config;
PREFIX = process.env.CLIENT_PREFIX

module.exports = async (client) => {
    client.on("ready", (cli, members, channels, guilds)=> {
        cli = client.user
        members = client.users.cache
        channels = client.channels.cache
        guilds = client.guilds.cache
        console.log(`I am preparing to start....`);
        console.log(`I am ready! Logged in as ${cli.tag}!`);
        console.log(`${cli.tag} has started, with ${members.size} users, in ${channels.size} channels of ${guilds.size} guilds.`);

        client.user.setActivity(`${PREFIX}help for ${members.size} users, in ${channels.size} channels of ${guilds.size} guilds.`);
    })

};