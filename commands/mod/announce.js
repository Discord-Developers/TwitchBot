const Commando = require('discord.js-commando');

module.exports = class AnnounceCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'announce',
            aliases: ['ann', 'a'],
            group: 'mod',
            memberName: 'announce',
            clientPermissions: ['MANAGE_MESSAGES'],
            userPermissions: ['MANAGE_MESSAGES'],
            description: 'Send an announcement to the specified channel',
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
        let channel = msg.mentions.channels.first();
        if (!channel) return;
        return channel.send(text);
    }
};