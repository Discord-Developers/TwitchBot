// This line simply checks to see if my Node.js version is version 12.
// If it isn't, it then tells me to update Node.js
if (Number(process.version.slice(1).split(".")[0]) < 12) throw new Error("Node 12.0.0 or higher is required. Update Node on your system.");


// These are my imports
const { CommandoClient, Commando } = require('discord.js-commando');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const path = require('path');

require('./.eslintrc.json');



require('dotenv').config();// I used dotenv to store my more secure info
const TOKEN = process.env.CLIENT_TOKEN;// This line reads my Bot Token from dotenv
const PREFIX = process.env.CLIENT_PREFIX;// This line reads my Client Prefix from dotenv
const OWNER_ID = process.env.OWNER;// This line reads the bot's owner id from dotenv



const init = async () => {// I crteated an async wrapper for my client here



    const client = await new CommandoClient({// I set my client here
        commandPrefix: PREFIX,
        owner: OWNER_ID,
        disableEveryone: true,
        unknownCommandResponse: false
    });

    const sqlite = require('sqlite');
    const sqlite3 = require('sqlite3');

    client.setProvider(
        sqlite.open({ filename: 'database.db', driver: sqlite3.Database }).then(db => new Commando.SQLiteProvider(db))
    ).catch(console.error);

    // Since I'm wrapping my client in an async wrapper, my commands and groups are registered here
    client.registry
        // Registers your custom command groups
        .registerGroups([
            ['admin', 'Administration'],
            ['mod', 'Moderation'],
            ['util', 'Utility'],
            ['misc', 'Miscellaneous'],
            ['stream', 'Stream']
        ])
        // Registers all built-in groups, commands, and argument types
        .registerDefaults()

        // Registers all of your commands in the ./commands/ directory
        .registerCommandsIn(path.join(__dirname, 'commands'));


    client.commands = new Enmap();// This sets a new Enmap for my commands
    client.aliases = new Enmap();// This sets a new Enmap for my command aliases
    client.settings = new Enmap({ name: "settings" });//This sets a new Enmap for my settings

    client.logger = require("./modules/Logger.js");//This line makes my bot require the internal Logger.js file I have in my bot's modules folder
    require("./modules/functions.js")(client);// This line makes my bot require the internal functions.js file I have in my bot's modules folder

    const evtFiles = await readdir("./events/");
    client.logger.log(`Loading a total of ${evtFiles.length} events.`);
    evtFiles.forEach(file => {
        const eventName = file.split(".")[0];
        client.logger.log(`Loading Event: ${eventName}`);
        const event = require(`./events/${file}`);
        // Bind the client to any event, before the existing arguments
        // provided by the discord.js event. 
        client.on(eventName, event.bind(null, client));

        client.login(TOKEN).catch(console.error);// Since my client is in an async wrapper, I imported my TOKEN here
    });

};

init();// Now that I've finished with the rest of my index.js file I have ended the async wrapper here