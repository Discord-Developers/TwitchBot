const { Command } = require('discord.js-commando');

module.exports = class ChannelCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'channel',
			aliases: ['chan'],
			group: 'util',
			memberName: 'channel',
			description: 'Gets information about a channel.',
			examples: ['channel #test', 'channel test'],
			guildOnly: true,
			throttling: {
				usages: 1,
				duration: 3
			},
			args: [
				{
					key: 'channel',
					label: 'textchannel',
					prompt: 'What channel would you like to snoop on?',
					type: 'channel'
				}
			]
		});
	}

	async run(msg, args) {
		
		const channel = args.channel;
		return msg.reply(`${channel.name} (${channel.id})`).then(console.log).catch(console.error);
	}
};