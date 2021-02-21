const Discord = require('discord.js');
require('dotenv').config();

const PREFIX = process.env.CLIENT_PREFIX;

module.exports = (client) => {
    client.on("guildMemberRemove", (member) => {
        const guild = member.guild;
        if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id)
            .then(console.log)
            .catch(console.error);
    })
};