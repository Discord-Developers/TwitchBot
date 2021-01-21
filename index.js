const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: 't!',
	owner: [
        '397666065066491905',
        '465228604721201158'
    ],
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

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with Commando');
});

client.on('error', console.error);
client.on('debug', console.)

client.login('your-token-goes-here');