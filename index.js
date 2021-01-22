const { TwitchCommandoClient, TwitchChatUser, TwitchChatMessage, CommandoSQLiteProvider } = require('twitch-commando');
const sqlite = require('sqlite');
const path = require('path');
require('dotenv').config();
const token = process.env.CLIENT_TOKEN;
const auth = process.env.OAUTH_TOKEN;
const user = process.env.CLIENT_USERNAME;
const owner_1 = process.env.OWNER_ID_1;
const owner_2 = process.env.OWNER_ID_2;



var client = new TwitchCommandoClient({
    username: user,
    commandPrefix: '!',
    oauth: auth,
    channels: ['#👋｜welcome', '#📣｜streaming', '#💼｜modlog'],
    botOwners: [owner_1, owner_2]
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

client.registerDetaultCommands();
client.registerCommandsIn(path.join(__dirname, 'commands'));

client.setProvider(
    sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new CommandoSQLiteProvider(db))
);

client.connect(token);