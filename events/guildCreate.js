const stripIndents = require('common-tags').stripIndents;

module.exports = (client) => {
    client.guilds.channels.cache
        .filter(channel => channel.type === 'text')
        .forEach((textChannel) =>
            textChannel.send(stripIndents`
        **❯ TwitchBot**
         • Notice: Thank you for inviting me to your guild. Before you can use my commands you must create a few channels. The channels required are listed below.
         • Streaming Channel: 📣｜streaming
         • ModLog Channel: 💼｜modlog
         • Welcome Channel: 👋｜welcome
         `).catch(console.error));
};