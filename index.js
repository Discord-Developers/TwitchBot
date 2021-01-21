const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const fs = require('fs');
const discord = require('discord.js');

const client = new CommandoClient({
    commandPrefix: 't!',
    token: "",
    owner: '465228604721201158',
    invite: 'https://dsc.gg/mtdev',
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['admin', 'Administration'],
        ['mod', 'Moderation'],
        ['util', 'Utility'],
        ['misc', 'Miscellaneous']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));


const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};


client.on('error', console.error);
client.login('');