const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class ChannelCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'channel',
            aliases: ['chan'],
            group: 'util',
            memberName: 'channel',
            description: 'Gets information about a channel.',
            examples: ['channel #test', 'channel test'],
            guildOnly: true,
            throttling: {
                usages: 1,
                duration: 3
            },
            args: [{
                key: 'channel',
                label: 'textchannel',
                prompt: 'What channel would you like to snoop on?',
                type: 'channel'
            }]
        });
    }
    async run(msg, args) {
        const channel = args.channel;
        let embed = new Discord.MessageEmbed()
            .setTitle('Channel Info')
            .setDescription(`${channel.name} (${channel.id})`)
            .setColor('RANDOM')
            .setURL('https://twitchbot.newhorizon.dev/')
            .setTimestamp()
            .setFooter('TwitchBot | twitchbot.newhorizon.dev', 'https://images-ext-2.discordapp.net/external/6vZM6YeZGzfxd4PF_aw3UnNHZafkdNlRoLp46YJ7hkU/%3Fsize%3D256/https/cdn.discordapp.com/avatars/779442792324661249/26206ede07f20447bf380df44b429db7.png')
        msg.say(embed)
            .then(console.log)
            .catch(console.error);
    }
};