const stripIndents = require('common-tags').stripIndents;
const { Command } = require('discord.js-commando');
require('dotenv').config();

CHANNEL_NAME = process.env.RULES_CHANNEL;

module.exports = class AnnounceCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'addrule',
            aliases: ['ra', 'radd'],
            group: 'mod',
            memberName: 'addrule',
            clientPermissions: ['MANAGE_MESSAGES'],
            userPermissions: ['MANAGE_MESSAGES'],
            description: 'Add a rule to the rules channel',
            examples: ['ra THIS IS AN EXAMPLE!'],
            args: [
                {
                    key: 'text',
                    prompt: 'What would you like the bot to announce?',
                    type: 'string',
                },
            ],
        });
    }

    run(msg, { text }) {

        client.guilds.channels.cache
            .filter(channel => channel.name === CHANNEL_NAME)
            .forEach((textChannel) =>
                textChannel.send(stripIndents`
            **❯** ${text}
            `).then(console.log).catch(console.error));
    }
};