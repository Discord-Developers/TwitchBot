const { Command } = require('discord.js-commando');

module.exports = class CreateChannelCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'create-channel',
            aliases: ['create-chan', 'add-channel', 'add-chan'],
            group: 'admin',
            memberName: 'create-channel',
            description: 'Creates a channel.',
            examples: ['create-channel Test channel'],
            guildOnly: true,
            throttling: {
                usages: 1,
                duration: 3
            },
            clientPermissions: ['MANAGE_CHANNELS'],
            userPermissions: ['MANAGE_CHANNELS'],

            args: [{
                key: 'name',
                label: 'channel name',
                prompt: 'What would you like the channel to be called?',
                type: 'string'
            }]
        });
    }

    async run(msg, { name }) {
        const channel = await msg.guild.channels.create(name);
        return msg.reply(`Created ${channel}[(${channel.id})]`)
            .then(console.log)
            .catch(err => {
                console.error(err);
                message.channel.send('There was an error with the command! Please contact a developer via our Discord!');
            })
    }
};