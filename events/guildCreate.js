const stripIndents = require('common-tags').stripIndents;
require('dotenv').config();

const PREFIX = process.env.CLIENT_PREFIX;

module.exports = async function(guild) {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    let embed = new DynamicsCompressorNode.MessageEmbed()
        .setTitle('Thanks for Inviting Me')
        .setDescription(`Type ${PREFIX}help to see a list of available commands.`)
        .addField('Support', '**Discord**: [MountainT Development](https://dsc.gg/mtdev/)\n**Website**: [TwitchBot](https://twitchbot.newhorizon.dev/)', false)
        .setColor('RANDOM')
        .setFooter('TwitchBot | twitchbot.newhorizon.dev', 'https://images-ext-2.discordapp.net/external/6vZM6YeZGzfxd4PF_aw3UnNHZafkdNlRoLp46YJ7hkU/%3Fsize%3D256/https/cdn.discordapp.com/avatars/779442792324661249/26206ede07f20447bf380df44b429db7.png')
    channel.say(embed)
        .then(console.log)
        .catch(console.error);
};