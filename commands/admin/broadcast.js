const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class broadcastCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'broadcast',
            aliases: ['bcastall', 'bcast', 'bc', 'bca'],
            group: 'admin',
            memberName: 'broadcast',
            guildOnly: true,
            clientPermissions: ['MANAGE_CHANNELS'],
            userPermissions: ['MANAGE_CHANNELS'],
            throttling: {
                usages: 1,
                duration: 10
            },
            description: 'Sends a global tts broadcast to all text channels in the guild.',
            examples: ['bc This is a Global TTS Broadcast!'],
            args: [{
                key: 'text',
                prompt: 'What would you like to broadcast?',
                type: 'string',
            }, ],
        })
    };

    run(msg, { text }) {
        msg.guild.channels.cache
            .filter(channel => channel.type === 'text')
            .forEach((textChannel) => {
                let embed = new Discord.MessageEmbed()
                    .setTitle('Broadcast')
                    .setDescription(`${text}`)
                    .setURL('https://twitchbot.newhorizon.dev/')
                    .setFooter('TwitchBot | twitchbot.newhorizon.dev', 'https://images-ext-2.discordapp.net/external/6vZM6YeZGzfxd4PF_aw3UnNHZafkdNlRoLp46YJ7hkU/%3Fsize%3D256/https/cdn.discordapp.com/avatars/779442792324661249/26206ede07f20447bf380df44b429db7.png')
                    .setColor('RANDOM')
                    .setThumbnail('https://images-ext-2.discordapp.net/external/6vZM6YeZGzfxd4PF_aw3UnNHZafkdNlRoLp46YJ7hkU/%3Fsize%3D256/https/cdn.discordapp.com/avatars/779442792324661249/26206ede07f20447bf380df44b429db7.png')
                textChannel.send(embed, { tts: true })
                    .then(console.log)
                    .catch(err => {
                        console.error(err);
                        message.channel.send('There was an error with the command! Please contact a developer via our Discord!');
                    })
            })
    }
};