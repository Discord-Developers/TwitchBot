const Discord = require('discord.js');
require('dotenv').config();

const PREFIX = process.env.CLIENT_PREFIX;

module.exports = (client) => {
    client.on("guildMemberAdd", (member) => {
        const guild = member.guild;
        if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
        newUsers[guild.id].set(member.id, member.user);

        if (newUsers[guild.id].size > 10) {
            const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
            let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
            let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("TwitchBot")
                .setDesciption("Welcome our new users!")
                .addFieldname(name="Users", value=userlist, inline = false)
            newUsers[guild.id].clear()
                .setTimestamp()
            channel.send(embed)
                .then(console.log)
                .catch(console.error);

        }
    })
};