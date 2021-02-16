const { Command } = require('discord.js-commando');

module.exports = class PurgeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            aliases: ['p', 'c', 'clean'],
            group: 'admin',
            memberName: 'purge',
            description: 'Purge some messages from a Text Channel.',
            examples: ['purge 5'],
            guildOnly: true,
			throttling: {
				usages: 1,
				duration: 3
			},
			clientPermissions: ['MANAGE_CHANNELS'],
			userPermissions: ['MANAGE_CHANNELS'],

            args: [
                {
                    key: 'numToPurge',
                    label: 'number',
                    prompt: 'Please input a number ( > 0) of messages to be deleted.',
                    type: 'integer'
                }
            ]
        });
    }

    run(msg, { numToPurge }) {
        let channel = msg.channel;

        if (numToPurge <= 0) {
            return msg.reply('Purge number must be greater than 0');
        }

        else if (channel.cache.type === 'text') {
            return channel.fetchMessages({ limit: numToPurge })
                .then(msgs => channel.cache.bulkDelete(msgs))
                .then(msgs => msg.reply(`Purge deleted ${msgs.cache.size} message(s)`))
                .then(console.log)
                .catch(console.error);
        }
        else {
            return msg.reply('```css\n[ERROR] Command Failed. Please contact an Administrator for assistance.\n```');
        }
    }
};