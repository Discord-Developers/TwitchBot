const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
require('dotenv').config();

SERVER_INVITE_URL = process.env.SERVER_INVITE
BOT_INVITE_URL = process.env.BOT_INVITE


    module.exports = class UserInfoCommand extends Command {
        constructor(client) {
            super(client, {
                name: 'invite',
                aliases: ['inv', 'i'],
                group: 'misc',
                memberName: 'invite',
                description: 'Grabs the bot\'s invite links',
                examples: ['invite'],
                guildOnly: true,
                throttling: {
                    usages: 1,
                    duration: 3
                },
            });
        }

        async run(msg) {
            let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .addField("Support Server", ` - [MountainT Development](${SERVER_INVITE_URL})`)
                .addField("Bot Invite", ` - [TwitchBot](${BOT_INVITE_URL})`)
            msg.channel.send(embed)
        }
    };