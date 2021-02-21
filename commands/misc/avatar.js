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
            .setURL(user.displayAvatarURL)
            .setImage(user.displayAvatarURL)
            .setColor('RANDOM')
        msg.say(embed)
            .then(console.log)
            .catch(console.error);
    }
};