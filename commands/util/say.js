const { TwitchChatCommand } = require('twitch-commando');

module.exports = class SayCommand extends TwitchChatCommand {
	constructor(client) {
		super(client, {
			name: 'say',
			aliases: ['shout', 'speak'],
			userPermissions: ['SEND_MESSAGES'],
			group: 'util',
			memberName: 'say',
			description: 'Replies with the text you provide.',
			args: [
				{
					key: 'text',
					prompt: 'What text would you like the bot to say?',
					type: 'string',
				},
			],
		});
	}

	run(message, { text }) {
		
		return message.reply(text).catch(console.error);
	}
};