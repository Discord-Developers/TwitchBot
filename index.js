if (Number(process.version.slice(1).split(".")[0]) < 12) throw new Error("Node 12.0.0 or higher is required. Update Node on your system.");


// These are my imports
const { CommandoClient } = require('discord.js-commando');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const path = require('path');

require('./.eslintrc.json');



require('dotenv').config();
const TOKEN = process.env.CLIENT_TOKEN;
const PREFIX = process.env.CLIENT_PREFIX;
const OWNER_ID = process.env.OWNER;



const init = async() => {

    const client = await new CommandoClient({
        commandPrefix: PREFIX,
        owner: OWNER_ID,
        disableEveryone: true,
        unknownCommandResponse: false
    });

    const sqlite = require('sqlite');
    const sqlite3 = require('sqlite3');
    const Commando = require('discord.js-commando');

    client.setProvider(
        sqlite.open({ filename: 'database.db', driver: sqlite3.Database }).then(db => new Commando.SQLiteProvider(db))
    ).catch(console.error);


    client.registry

        .registerGroups([
        ['admin', 'Administration'],
        ['mod', 'Moderation'],
        ['util', 'Utility'],
        ['misc', 'Miscellaneous'],
        ['stream', 'Stream']
    ])

    .registerDefaults()


    .registerCommandsIn(path.join(__dirname, 'commands'));


    client.commands = new Enmap();
    client.aliases = new Enmap();
    client.settings = new Enmap({ name: "settings" });

    require("./modules/functions.js")(client);

    const evtFiles = await readdir("./events/");
    console.log(`Loading a total of ${evtFiles.length} events.`);
    evtFiles.forEach(file => {
        const eventName = file.split(".")[0];
        console.log(`Loading Event: ${eventName}`);
        const event = require(`./events/${file}`);

        client.on(eventName, event.bind(null, client));
        client.on("error", (err) => {
            console.log(`Discord client error '${err.code}' (${err.message})`)
        });
        client.on("warn", function(info) {
            console.log(`warn: ${info}`)
        });
        client.on("debug", function(info) {
            console.log(`debug: ${info}`)
        });
    });


    client.login(TOKEN)
        .then(console.log)
        .catch(err => {
            console.error(err)
            console.log(`Discord client error '${err.code}' (${err.message})`)
        });
};

init();