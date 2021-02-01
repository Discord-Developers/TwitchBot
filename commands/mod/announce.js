const stripIndents = require('common-tags').stripIndents;
const { Command } = require('discord.js-commando');
require('dotenv').config();

CHANNEL_NAME = process.env.ANNOUNCEMENT_CHANNEL;

module.exports = class AnnounceCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'announce',
            aliases: ['ann', 'a'],
            group: 'mod',
            memberName: 'announce',
            clientPermissions: ['MANAGE_MESSAGES'],
            userPermissions: ['MANAGE_MESSAGES'],
            description: 'Send an announcement to the announcements channel',
            examples: ['ann Hello, world!'],
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
            **❯ TwitchBot**
            • Notice: An announcement has been sent.
            • Message: ${text}
            `).then(console.log).catch(console.error));
    }
};