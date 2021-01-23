const { TwitchCommandoClient } = require('twitch-commando');
const path = require('path');

require('./.eslintrc.json');
require('dotenv').config();

const env1 = process.env.CLIENT_NAME;
const env2 = process.env.CLIENT_TOKEN;
const env3 = process.env.CLIENT_PREFIX;
const env4 = process.env.OAUTH_PASSWORD;
const env5 = process.env.OWNER_1;
const env6 = process.env.OWNER_2;

const client = new TwitchCommandoClient({
    username: env1,
    commandPrefix: env3,
    oauth: env4,
    channels: [''],
    botOwners: [env5, env6],
    botAutoJoinChannels: false,
    botEnableJoinCommand: true,
    disableEveryone: true,
    unknownCommandResponse: false
});

client.registerDetaultCommands();
client.registerCommandsIn(path.join(__dirname, 'commands'));

client.on("ready", function () {
    console.log(`the client becomes ready to start`);
    console.log(`I am ready! Logged in as ${client.user.tag}!`);
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);

    client.user.setActivity(`${client.user.tag} | ${process.env.WEBSITE_URL}`);
    client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
        .then(link => {
            console.log(`Generated bot invite link: ${link}`);
            inviteLink = link;
        });
});

client.connect(env2).catch(console.error);