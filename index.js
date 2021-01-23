const { TwitchCommandoClient, TwitchChatUser, TwitchChatMessage, CommandoSQLiteProvider } = require('twitch-commando');
const eslint = require('eslint');
const sqlite = require('sqlite');
const path = require('path');
require('dotenv').config();
const fs = require('fs');
const env1 = process.env.CLIENT_NAME;
const env2 = process.env.CLIENT_TOKEN;
const env3 = process.env.CLIENT_PREFIX;
const env4 = process.env.OAUTH_PASSWORD;
const env5 = process.env.OWNER_1;
const env6 = process.env.OWNER_2;
const env7 = process.env.DISABLE_EVERYONE;
const env8 = process.env.UNKNOWN_COMMAND_RESPONSE;




var client = new TwitchCommandoClient({
    username: env1,
    commandPrefix: env2,
    oauth: env4,
    botOwners: [env5, env6],
    disableEveryone: env7,
    unknownCommandResponse: env8
});

client.enableVerboseLogging();

client.setProvider(sqlite.open(path.join(__dirname, 'database')).then(db => new CommandoSQLiteProvider(db))
);

client.registerDetaultCommands();
client.registerCommandsIn(path.join(__dirname, 'commands'));

client.on("ready", function () {
    console.log(`the client becomes ready to start`);
    console.log(`I am ready! Logged in as ${client.user.tag}!`);
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);

    client.user.setActivity("the upright organ");
    client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
        .then(link => {
            console.log(`Generated bot invite link: ${link}`);
            inviteLink = link;
        });
});

client.on("reconnecting", function () {
    console.log(`client tries to reconnect to the WebSocket`);
});

client.on("resume", function (replayed) {
    console.log(`whenever a WebSocket resumes, ${replayed} replays`);
});

client.on("warn", function (info) {
    console.log(`warn: ${info}`);
});

client.on("debug", function (info) {
    console.log(`debug -> ${info}`);
});

client.on("error", function (error) {
    console.error(`client's WebSocket encountered a connection error: ${error}`);
});

client.on("message", function (message) {
    console.log(`message is created -> ${message}`);
});


client.connect(TOKEN).catch(console.error);