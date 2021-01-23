const discord = require('discord.js');
const { TwitchChatCommand } = require('twitch-commando');

module.exports = class broadcastCommand extends TwitchChatCommand {
    constructor(client) {
        super(client, {
            name: 'broadcast',
            aliases: ['bcastall', 'bcast', 'bc', 'bca'],
            group: 'admin',
            guildOnly: true,
            clientPermissions: ['MANAGE_CHANNELS'],
            userPermissions: ['MANAGE_CHANNELS'],
            description: 'Sends a global tts broadcast to all text channels in the guild.',
            examples: ['bc TESTING GLOBAL BROADCAST!'],
            args: [
                {
                    key: 'text',
                    prompt: 'What would you like to broadcast?',
                    type: 'string',
                },
            ],
        })
    };

    run(msg, { text }) {
        msg.guild.channels.cache
            .filter(channel => channel.type === 'text')
            .forEach((textChannel) => {
                textChannel.send(text, { tts: true }).catch(console.error);
            });
    }
};