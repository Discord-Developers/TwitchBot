const { TwitchCommandoClient, TwitchChatUser, TwitchChatMessage, CommandoSQLiteProvider } = require('twitch-commando');
const eslint = require('eslint');
// const sqlite = require('sqlite');
const path = require('path');
require('dotenv').config();
// const fs = require('fs');
const TOKEN = process.env.CLIENT_TOKEN;
const env1 = process.env.OWNER_1;
const env2 = process.env.OWNER_2;

var client = new TwitchCommandoClient({
    username: 'TwitchBot',
    commandPrefix: '!',
    oauth: './database/oath.db',
    channels: './database/channels.db',
    botOwners: [env1, env2],
    disableEveryone: true,
    unknownCommandResponse: false
});



client.enableVerboseLogging();

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


client.registerDetaultCommands();
client.registerCommandsIn(path.join(__dirname, 'commands'));


// client.setProvider(sqlite.open(path.join(__dirname, 'database')).then(db => new CommandoSQLiteProvider(db))
// );



// fs.readdir('./events/', (err, files) => {
//     if (err) return console.error(err);
//     files.forEach(file => {
//         const eventFunction = require(`./events/${file}`);
//         if (eventFunction.disabled) return;
// 
//         const event = eventFunction.event || file.split('.')[0];
//         const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client;
//         const once = eventFunction.once;
// 
//         try {
//             emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(...args));
//         } catch (error) {
//             console.error(error.stack);
//         }
//     });
// });

client.connect(TOKEN);
