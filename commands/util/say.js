const commando = require('discord.js-commando');

module.exports = class SayCommand extends commando.Command {
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
		return message.send(text);
	}
};