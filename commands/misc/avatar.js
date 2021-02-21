const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: "avatar",
            aliases: ["profilepicture"],
            group: 'misc',
            memberName: 'avatar',
            description: 'Sends the avatar of a user.',
            args: [{
                type: "user",
                prompt: "Which user would you like to get the avatar of?",
                key: "user",
                default: msg => msg.author
            }]
        })
    }
    run(msg, { user }) {

        let embed = new Discord.MessageEmbed()
            .setTitle(`${user.tag}s profile picture!`)
            .setImage(user.displayAvatarURL)
            .setColor('RANDOM')
            .setTimestamp()
            .setURL(url = 'https://twitchbot.newhorizon.dev/')
            .setFooter(text = `TwitchBot | twitchbot.newhorizon.dev`, iconUrl = 'https://images-ext-2.discordapp.net/external/6vZM6YeZGzfxd4PF_aw3UnNHZafkdNlRoLp46YJ7hkU/%3Fsize%3D256/https/cdn.discordapp.com/avatars/779442792324661249/26206ede07f20447bf380df44b429db7.png')
        msg.say(embed)
            .then(console.log)
            .catch(console.error);
    }
};