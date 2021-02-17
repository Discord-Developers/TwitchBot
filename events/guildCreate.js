const Discord = require('discord.js');
const stripIndents = require('common-tags').stripIndents;
require('dotenv').config();

const PREFIX = process.env.CLIENT_PREFIX;

module.exports = async function (guild) {
    guild.owner.send(stripIndents`
    **❯ TwitchBot**
     • Thank you for inviting me to ${guild}

    **❯ Support**
     • Discord: top.gg/servers/775844088338972693/join
     • Website: twitchbot.newhorizon.dev

     **❯ Info**
     • Type t!help to see a list of available commands.
`).then(console.log).catch(console.error);
};
