const { TwitchCommandoClient, TwitchChatUser, TwitchChatMessage, CommandoSQLiteProvider } = require('twitch-commando');
require('discord.js');
const sqlite = require('sqlite');
const path = require('path');
require('dotenv').config();
const TOKEN = process.env.CLIENT_TOKEN;
const PREFIX = process.env.CLIENT_PREFIX;
const AUTH = process.env.OAUTH_TOKEN;
const USER = process.env.CLIENT_USERNAME;
const OWN1 = process.env.OWNER_ID_1;
const OWN2 = process.env.OWNER_ID_2;
const CH1 = process.env.CHANNEL_1;
const CH2 = process.env.CHANNEL_2;
const CH3 = process.env.CHANNEL_3;



var client = new TwitchCommandoClient({
    username: USER,
    commandPrefix: PREFIX,
    oauth: AUTH,
    channels: [CH1, CH2, CH3],
    botOwners: [OWN1, OWN2]
});

client.enableVerboseLogging();

client.on('connected', () => {    
});

client.on('join', channel => {
});

client.on('error', err => {
});

client.on('message', message => {
});

client.registerGroups();
client.registerDetaultCommands();
// client.registerCommandsIn(path.join(__dirname, 'commands'));
// 
// client.setProvider(
//     sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new CommandoSQLiteProvider(db))
// );

client.connect(TOKEN);