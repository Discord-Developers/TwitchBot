require('dotenv').config;

module.exports = async (client) => {
    console.log(`the client becomes ready to start`);
    console.log(`I am ready! Logged in as ${client.user.tag}!`);
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);

    client.user.setActivity(`${process.env.CLIENT_PREFIX}help | ${process.env.WEBSITE_URL}`);
};