const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class PurgeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            aliases: ['p', 'c', 'clean'],
            group: 'admin',
            memberName: 'purge',
            description: 'Purge some messages from a Text Channel.',
            examples: ['purge 5'],
            guildOnly: true,
            throttling: {
                usages: 1,
                duration: 3
            },
            clientPermissions: ['MANAGE_CHANNELS'],
            userPermissions: ['MANAGE_CHANNELS'],

            args: [{
                key: 'amount',
                label: 'number',
                prompt: 'Please input a number between 0 and 100.',
                type: 'integer'
            }]
        });
    }

    run(message, args) {
        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount, true).then(deletedMessages => {
                var botMessages = deletedMessages.filter(m => m.author.bot);
                var userPins = deletedMessages.filter(m => m.pinned);
                var userMessages = deletedMessages.filter(m => !m.author.bot);

                const embed = new Discord.MessagEmbed()
                    .setTitle("Purge Command Issued")
                    .setDescription('The following messages have been purged.')
                    .setColor('RANDOM')
                    .setFooter(client.user.name + ' | twitchbot.newhorizon.dev', client.user.avatarURL)
                    .setThumbnail(client.user.avatarURL)
                    .setTimestamp()
                    .setURL("https://twitchbot.newhorizon.dev")
                    .addField("Bot Messages Purged", botMessages.size, false)
                    .addField("User Pins Purged", userPins.size, false)
                    .addField("User Messages Purged", userMessages.size, false)
                    .addField("Total Messages Purged", deletedMessages.size, false);

                message.channel.send(embed);
            })
            .then(console.log(args[0]))
            .catch(err => {
                console.error(err);
                msg.guilds.channels.cache
                    .filter(channel => channel.id === '813940493108903946')
                    .forEach((textChannel) => {
                        textChannel.send('```css\n [' + client.user.name + ' ERROR] ' + err.code + ': [' + err.message + ']\n```');
                    });
            })
    }
};