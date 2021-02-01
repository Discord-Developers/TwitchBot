const Discord = require('discord.js');
require('dotenv').config();

const PREFIX = process.env.CLIENT_PREFIX;

module.exports = (client) => {

    let defaultChannel = "👋｜welcome";
    guild.channels.cache.forEach((channel) => {
        if (channel.type == "text" && defaultChannel == "👋｜welcome") {
            if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                defaultChannel = channel;
            }
        }
    })

    let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Welcome")
        .setDesciption("Thank you for inviting me to your guild.\nPlease note that in order to fully use my features you will need to create the following channels:\n\n📣｜announcements\n📣｜news\n📝｜mod-logs\n📣｜streaming\n👋｜welcome")
        .setTimestamp()
    defaultChannel.send(embed).then(console.log).catch(console.error);
};
