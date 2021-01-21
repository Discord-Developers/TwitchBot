const discord = require('discord.js');
const commando = require('discord.js-commando');

module.exports = class AnnounceCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'announce',
      aliases: ['ann'],
      group: 'mod',
      memberName: 'announce',
      userPermissions: ['MANAGE_MESSAGES', 'MANAGE_CHANNELS'],
      description: 'Send an announcement to the specified channel',
      examples: ['announce Hello, world!'],
      args: [
        {
          key: 'text',
          prompt: 'What would you like the bot to announce?',
          type: 'string',
        },
      ],
    });
  }

  run(msg, { text }) {
    let channel = msg.guild.cache.channels.find(c => c.name === "updates")
    const embed = new discord.RichEmbed()
      .setAuthor(`TwitchBot`, `https://raw.githubusercontent.com/Discord-Coding-Community/TwitchBot/main/img/avatar.png?size=2048`)
      .setThumbnail(`https://raw.githubusercontent.com/Discord-Coding-Community/TwitchBot/main/img/avatar.png?size=2048`)
      .setColor(0xffcc00)
      .addField(`Announcement`, (text), false)
      .setFooter(`TwitchBot`, `https://raw.githubusercontent.com/Discord-Coding-Community/TwitchBot/main/img/avatar.png?size=2048`)
      .setTimestamp();
    return channel.send(embed);
  }
};