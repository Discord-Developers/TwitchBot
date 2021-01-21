const {
    TwitchCommandoClient, TwtichChatMessage, TwtichChatUser, CommandoSQLiteProvider
} = require('twitch-commando');
const sqlite = require('sqlite');
const path = require('path');

var client = new TwitchCommandoClient({
    username: 'TwitchBot',
    oauth: '',
    channels: [ '#streaming' ],
    botOwners: [
        'MountainTiger144#2567',
        'Nimbi#4961'
    ]
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

client.connect();
