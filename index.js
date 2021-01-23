const { TwitchCommandoClient, TwitchChatUser, TwitchChatMessage, CommandoSQLiteProvider } = require('twitch-commando');
require('enmap');
const handle = require("discord-error-handler");
const sqlite = require('sqlite');
const path = require('path');
require('dotenv').config();
const fs = require('fs');
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

client.registerDetaultCommands();
client.registerCommandsIn(path.join(__dirname, 'commands'));
client.setProvider(
    sqlite.open(path.join(__dirname, 'database')).then(db => new CommandoSQLiteProvider(db))
);



fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        if (eventFunction.disabled) return;

        const event = eventFunction.event || file.split('.')[0];
        const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client;
        const once = eventFunction.once;

        try {
            emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(...args));
        } catch (error) {
            console.error(error.stack);
        }
    });
});


client.connect(TOKEN);
