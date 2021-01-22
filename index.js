const { client, TwitchChatUser, TwitchChatMessage, CommandoSQLiteProvider } = require('twitch-commando');
const sqlite = require('sqlite');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const token = process.env.CLIENT_TOKEN;
const prefix = process.env.CLIENT_PREFIX;
const auth = process.env.OAUTH_TOKEN;
const owner_id_1 = process.env.OWNER_ID_1;
const owner_id_2 = process.env.OWNER_ID_2;



const client = new TwitchCommandoClient({
    commandPrefix: prefix,
    oauth: auth,
    channels: ['#👋｜welcome', '#📣｜streaming', '#💼｜modlog'],
    botOwners: [owner_id_1, owner_id_2],
    invite: 'https://dsc.gg/mtdev',
    disableEveryone: true
});


client.registerDetaultCommands();
client.registerCommandsIn(path.join(__dirname, 'commando/twitch'));




const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

client.setProvider(
    sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new CommandoSQLiteProvider(db))
);

client.on('connected', () => {
});
client.on('join', channel => {
});
client.on('error', err => {
});
client.on('message', message => {
});

client.on('error', console.error);
client.connect(token);