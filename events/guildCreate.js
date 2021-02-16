const Discord = require('discord.js');
require('dotenv').config();

const PREFIX = process.env.CLIENT_PREFIX;

module.exports = async function (guild) {
    const client = this;
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    console.log(`${client.user.username}` + `has entered` + `${guild.name}.`)
    let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("TwitchBot")
        .setDesciption(`Thank you for inviting me to your guild.\nType ${PREFIX}help for a list of available commands.`)
        .setTimestamp()
    channel.send(embed)
        .then(console.log)
        .catch(console.error);
};
