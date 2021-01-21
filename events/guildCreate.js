const stripIndents = require('common-tags').stripIndents;

module.exports = (client) => {
    client.guilds.channels.cache
        .filter(channel => channel.type === 'text')
        .forEach((textChannel) =>
            textChannel.send(stripIndents`
        **❯ Info**
         • Notice: Thank you for inviting me to your guild. Before you can use my commands you must create a few channels. The channels required are listed below.
         • ModLog Channel: 💼｜modlog
         • Announcements Channel: 📣｜announcements
         • Broadcasts Channel: 📣｜broadcasts
         • Streaming Channel: 📣｜streaming
         `).catch(console.error));
};