const { TwitchChatCommand } = require('twitch-commando');

module.exports = class ChannelCommand extends TwitchChatCommand {
	constructor(client) {
		super(client, {
			name: 'channel',
			aliases: ['chan'],
			group: 'util',
			memberName: 'channel',
			description: 'Gets information about a channel.',
			examples: ['channel #test', 'channel test'],
			guildOnly: true,

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
		return msg.reply(`${channel.name} (${channel.id})`).catch(console.error);
	}
};