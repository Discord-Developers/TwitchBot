const Discord = require('discord.js');
require('dotenv').config();

const PREFIX = process.env.CLIENT_PREFIX;

module.exports = (client) => {

    let channelID;
    let channels = guild.channels.cache;

    channelLoop:
    for (let key in channels) {
        let c = channels[key];
        if (c[1].type === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = guild.channels.cache.get(guild.systemChannelID || channelID);

    let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("TwitchBot")
        .setDesciption(`Thank you for inviting me to your guild.\nType ${PREFIX}help for a list of available commands.`)
        .setTimestamp()
    channel.send(embed).then(console.log).catch(console.error);
};
