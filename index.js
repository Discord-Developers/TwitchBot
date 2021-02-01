if (Number(process.version.slice(1).split(".")[0]) < 12) throw new Error("Node 12.0.0 or higher is required. Update Node on your system.");

const { CommandoClient, Commando } = require('discord.js-commando');
const sqlite = require('sqlite');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const path = require('path');

require('./.eslintrc.json');
require('dotenv').config();


const TOKEN = process.env.CLIENT_TOKEN;
const PREFIX = process.env.CLIENT_PREFIX;
const OWNER_ID = process.env.OWNER;






const init = async () => {

    const client = await new CommandoClient({
        commandPrefix: PREFIX,
        owner: OWNER_ID,
        disableEveryone: true,
        unknownCommandResponse: false
    });

    client.registry
        .registerDefaultTypes()
        .registerGroups([
            ['admin', 'Administration'],
            ['mod', 'Moderation'],
            ['util', 'Utility'],
            ['misc', 'Miscellaneous'],
            ['twitch', 'Twitch']
        ])
        .registerDefaultGroups()
        .registerDefaultCommands()
        .registerCommandsIn(path.join(__dirname, 'commands'));


    client.commands = new Enmap();
    client.aliases = new Enmap();
    client.settings = new Enmap({ name: "settings" });

    client.logger = require("./modules/Logger.js");
    require("./modules/functions.js")(client);

    client.setProvider(sqlite.open(path.join(__dirname, 'settings.sqlite3'))
        .then(db => new Commando.SQLiteProvider(db)))
        .catch(console.error);

    const evtFiles = await readdir("./events/");
    client.logger.log(`Loading a total of ${evtFiles.length} events.`);
    evtFiles.forEach(file => {
        const eventName = file.split(".")[0];
        client.logger.log(`Loading Event: ${eventName}`);
        const event = require(`./events/${file}`);
        // Bind the client to any event, before the existing arguments
        // provided by the discord.js event. 
        // This line is awesome by the way. Just sayin'.
        client.on(eventName, event.bind(null, client));

        client.login(TOKEN).catch(console.error);
    });

};

init();