const stripIndents = require('common-tags').stripIndents;
require('dotenv').config();

const PREFIX = process.env.CLIENT_PREFIX;

module.exports = async function (guild) {
    client.on("guildMemberAdd", (guild) => {
        guild.owner.send(stripIndents`
    **❯ TwitchBot**
     • Thank you for inviting me to ${guild.name}

    **❯ Support**
     • Discord: top.gg/servers/775844088338972693/join
     • Website: twitchbot.newhorizon.dev

     **❯ Info**
     • Type ${PREFIX}help to see a list of available commands.
`).then(console.log).catch(console.error);
    })
};
