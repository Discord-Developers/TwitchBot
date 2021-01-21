const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const fs = require('fs');

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
    
    fs.readdir('./events/', (err, files) => { // We use the method readdir to read what is in the events folder
        if (err) return console.error(err); // If there is an error during the process to read all contents of the ./events folder, throw an error in the console
        files.forEach(file => {
            const eventFunction = require(`./events/${file}`); // Here we require the event file of the events folder
            if (eventFunction.disabled) return; // Check if the eventFunction is disabled. If yes return without any error
    
            const event = eventFunction.event || file.split('.')[0]; // Get the exact name of the event from the eventFunction variable. If it's not given, the code just uses the name of the file as name of the event
            const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client; // Here we define our emitter. This is in our case the client (the bot)
            const once = eventFunction.once; // A simple variable which returns if the event should run once
    
            // Try catch block to throw an error if the code in try{} doesn't work
            try {
                emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(...args)); // Run the event using the above defined emitter (client)
            } catch (error) {
                console.error(error.stack); // If there is an error, console log the error stack message
            }
        });
    });

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with Commando');
});

client.on('error', console.error);
client.on('debug', console.);

client.login('your-token-goes-here');