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
            .addField(name = 'Member Nickname', value = member.nickname !== null ? member.nickname : ' • No nickname')
            .addField(name = 'Roles', value = member.roles.map(roles => `\`${roles.name}\``).join(', '), inline = false)
            .addField(name = 'Joined At', value = `${member.joinedAt}`, inline = false)
            .addField(name = 'Created At', value = `${user.createdAt}${user.bot ? '\n • Is a bot account' : ''}`, inline = false)
            .addField(name = 'Status', value = `${user.presence.status}`, inline = false)
            .addField(name = 'Game', value = `${user.presence.game ? user.presence.game.name : 'None'}`, inline = false)
            .setTimestamp()
            .setUrl(url = 'https://twitchbot.newhorizon.dev/')
            .setFooter(text = `TwitchBot | twitchbot.newhorizon.dev`, iconUrl = 'https://images-ext-2.discordapp.net/external/6vZM6YeZGzfxd4PF_aw3UnNHZafkdNlRoLp46YJ7hkU/%3Fsize%3D256/https/cdn.discordapp.com/avatars/779442792324661249/26206ede07f20447bf380df44b429db7.png')
        msg.say(embed)
            .then(console.log)
            .catch(console.error);
    }
};