const Discord = require('discord.js');
require('dotenv').config();

const PREFIX = process.env.CLIENT_PREFIX;

module.exports = async function (guild) {
    let embed = new Discord.RichEmbed() // Makes a pretty embed
        .setTitle(client)
        .setDescription(`Thank you for inviting me to ${guild}`)
        .setColor("RANDOM")
        .addField("Support", " - [Discord](https://top.gg/servers/775844088338972693/join)\n - [Website](https://twitchbot.newhorizon.dev)", true)
        .addField("Info", "Type `t!help` to see a list of my available commands.", true)
        .setFooter(client.user.avatarUrl, client.user.name);
    guild.owner.send(embed);
};
