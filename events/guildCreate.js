const stripIndents = require('common-tags').stripIndents;

module.exports = (client) => {
    client.guilds.channels.cache.create('👋｜welcome', { reason: 'Welcome Message Channel' })
        .then(console.log)
        .catch(console.error);

    client.guilds.channels.cache.create('📋｜rules', { reason: 'Rules Channel' })
        .then(console.log)
        .catch(console.error);

    client.guilds.channels.cache.create('📣｜announements', { reason: 'Announcements Channel' })
        .then(console.log)
        .catch(console.error);

    client.guilds.channels.cache.create('📣｜streaming', { reason: 'Stream Alerts Channel' })
        .then(console.log)
        .catch(console.error);

    client.guilds.channels.cache.create('📝｜message-log', { reason: 'Message Logs Channel' })
        .then(console.log)
        .catch(console.error);

    client.guilds.channels.cache.create('📝｜action-log', { reason: 'Action Logs Channel' })
        .then(console.log)
        .catch(console.error);

    client.guilds.channels.cache.create('📝｜voice-log', { reason: 'Voice Logs Channel' })
        .then(console.log)
        .catch(console.error);

    client.guilds.channels.cache.create('📝｜invite-log', { reason: 'Invite Logs Channel' })
        .then(console.log)
        .catch(console.error);

    client.guilds.channels.cache
        .filter(channel => channel.name === '👋｜welcome')
        .forEach((textChannel) =>
            textChannel.send(stripIndents`
        **❯ TwitchBot**
         • Thank you for inviting me to your guild.
         • I have created ththis channel for use with Welcome messages.
         • Please be sure to adjust the channel permissions as preferred.
         • Please type t!help to see a list of my available commands. 
         `).then(console.log).catch(console.error));

    client.guilds.channels.cache
        .filter(channel => channel.name === '📝｜rules')
        .forEach((textChannel) =>
            textChannel.send(stripIndents`
          **❯ TwitchBot**
           • Thank you for inviting me to your guild.
           • I have created ththis channel for use with the guild rules.
           • Please be sure to adjust the channel permissions as preferred.
           • Please type t!help to see a list of my available commands. 
           `).then(console.log).catch(console.error));

    client.guilds.channels.cache
        .filter(channel => channel.name === '📝｜invite-log')
        .forEach((textChannel) =>
            textChannel.send(stripIndents`
         **❯ TwitchBot**
          • Thank you for inviting me to your guild.
          • I have created ththis channel for use with invite logs.
          • Please be sure to adjust the channel permissions as preferred.
          • Please type t!help to see a list of my available commands. 
          `).then(console.log).catch(console.error));

    client.guilds.channels.cache
        .filter(channel => channel.name === '📝｜mod-log')
        .forEach((textChannel) =>
            textChannel.send(stripIndents`
           **❯ TwitchBot**
            • Thank you for inviting me to your guild.
            • I have created ththis channel for use with moderation logs.
            • Please be sure to adjust the channel permissions as preferred.
            • Please type t!help to see a list of my available commands. 
            `).then(console.log).catch(console.error));

    client.guilds.channels.cache
        .filter(channel => channel.name === '📝｜message-log')
        .forEach((textChannel) =>
            textChannel.send(stripIndents`
             **❯ TwitchBot**
              • Thank you for inviting me to your guild.
              • I have created ththis channel for use with message logs.
              • Please be sure to adjust the channel permissions as preferred.
              • Please type t!help to see a list of my available commands. 
              `).then(console.log).catch(console.error));

    client.guilds.channels.cache
        .filter(channel => channel.name === '📝｜action-log')
        .forEach((textChannel) =>
            textChannel.send(stripIndents`
               **❯ TwitchBot**
                • Thank you for inviting me to your guild.
                • I have created ththis channel for use with action logs.
                • Please be sure to adjust the channel permissions as preferred.
                • Please type t!help to see a list of my available commands. 
                `).then(console.log).catch(console.error));

    client.guilds.channels.cache
        .filter(channel => channel.name === '📝｜voice-log')
        .forEach((textChannel) =>
            textChannel.send(stripIndents`
                 **❯ TwitchBot**
                  • Thank you for inviting me to your guild.
                  • I have created ththis channel for use with voice channel logs.
                  • Please be sure to adjust the channel permissions as preferred.
                  • Please type t!help to see a list of my available commands. 
                  `).then(console.log).catch(console.error));

    client.guilds.channels.cache
        .filter(channel => channel.name === '📣｜announements')
        .forEach((textChannel) =>
            textChannel.send(stripIndents`
                   **❯ TwitchBot**
                    • Thank you for inviting me to your guild.
                    • I have created ththis channel for use with announcement notifications.
                    • Please be sure to adjust the channel permissions as preferred.
                    • Please type t!help to see a list of my available commands. 
                    `).then(console.log).catch(console.error));

    client.guilds.channels.cache
        .filter(channel => channel.name === '📣｜streaming')
        .forEach((textChannel) =>
            textChannel.send(stripIndents`
                     **❯ TwitchBot**
                      • Thank you for inviting me to your guild.
                      • I have created ththis channel for use with stream alert notifications.
                      • Please be sure to adjust the channel permissions as preferred.
                      • Please type t!help to see a list of my available commands. 
                      `).then(console.log).catch(console.error));
};
