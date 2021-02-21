const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class UserInfoCommand extends Command {
        constructor(client) {
            super(client, {
                name: 'user-info',
                aliases: ['user', 'uinfo'],
                group: 'util',
                memberName: 'user-info',
                description: 'Gets information about a user.',
                examples: ['user-info @Crawl#3208', 'user-info Crawl'],
                guildOnly: true,
                throttling: {
                    usages: 1,
                    duration: 3
                },
                args: [{
                    key: 'member',
                    label: 'user',
                    prompt: 'What user would you like to snoop on?',
                    type: 'member'
                }]
            });
        }

        async run(msg, args) {
                const member = args.member;
                const user = member.user;
                let embed = new Discord.MessageEmbed()
                    .setTitle(`Info on **${user.username}#${user.discriminator}** (ID: ${user.id}`)
                    .addField('Member Nickname', `${member.nickname !== null ? member.nickname : ' • No nickname'}`, false)
                    .addField('Roles', `${member.roles.map(roles => `\`${roles.name}\``).join(', ')}`, false)
            .addField('Joined At', `${member.joinedAt}`, false)
            .addField('Created At', `${user.createdAt}${user.bot ? '\n • Is a bot account' : ''}`, false)
            .addField('Status', `${user.presence.status}`, false)
            .addField('Game', `${user.presence.game ? user.presence.game.name : 'None'}`, false)
            .setTimestamp()
            .setURL('https://twitchbot.newhorizon.dev/')
            .setFooter(`TwitchBot | twitchbot.newhorizon.dev`, 'https://images-ext-2.discordapp.net/external/6vZM6YeZGzfxd4PF_aw3UnNHZafkdNlRoLp46YJ7hkU/%3Fsize%3D256/https/cdn.discordapp.com/avatars/779442792324661249/26206ede07f20447bf380df44b429db7.png')
        msg.say(embed)
            .then(console.log)
            .catch(console.error);
    }
};