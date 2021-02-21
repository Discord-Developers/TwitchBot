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
        let embed = new DynamicsCompressorNode.MessageEmbed()
            .setTitle('Channel Created')
            .setDescription(`Created ${channel}[(${channel.id})]`)
            .setColor('RANDOM')
            .setTimestamp()
            .setURL('https://twitchbot.newhorizon.dev/')
            .setFooter('TwitchBot | twitchbot.newhorizon.dev', 'https://images-ext-2.discordapp.net/external/6vZM6YeZGzfxd4PF_aw3UnNHZafkdNlRoLp46YJ7hkU/%3Fsize%3D256/https/cdn.discordapp.com/avatars/779442792324661249/26206ede07f20447bf380df44b429db7.png')
            .setThumbnail('https://images-ext-2.discordapp.net/external/6vZM6YeZGzfxd4PF_aw3UnNHZafkdNlRoLp46YJ7hkU/%3Fsize%3D256/https/cdn.discordapp.com/avatars/779442792324661249/26206ede07f20447bf380df44b429db7.png')
        msg.say(embed)
            .then(console.log)
            .catch(err => {
                console.error(err);
                message.channel.send('There was an error with the command! Please contact a developer via our Discord!');
            })
    }
};