const { TwitchCommandoClient, TwitchChatUser, TwitchChatMessage, CommandoSQLiteProvider } = require('twitch-commando');
require('enmap');
const handle = require("discord-error-handler");
const sqlite = require('sqlite');
const path = require('path');
require('dotenv').config();
const fs = require('fs');
const TOKEN = process.env.CLIENT_TOKEN;
const PREFIX = process.env.CLIENT_PREFIX;
const AUTH = process.env.OAUTH_PASSWORD;
const USER = process.env.CLIENT_USERNAME;
const OWN1 = process.env.OWNER_ID_1;
const OWN2 = process.env.OWNER_ID_2;
const CH1 = process.env.CHANNEL_1;
const CH2 = process.env.CHANNEL_2;
const CH3 = process.env.CHANNEL_3;
const ERROR_CHANNEL = process.nextTick.CHANNEL_ID;
const ERROR_GUILD = process.env.GUILD_ID;

var client = new TwitchCommandoClient({
    username: USER,
    commandPrefix: PREFIX,
    oauth: AUTH,
    channels: [CH1, CH2, CH3],
    botOwners: [OWN1, OWN2]
});

client.enableVerboseLogging();

client.registerDetaultCommands();
client.registerCommandsIn(path.join(__dirname, 'commands'));
client.setProvider(
    sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new CommandoSQLiteProvider(db))
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
