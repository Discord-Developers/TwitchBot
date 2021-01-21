const discord = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class AnnounceCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'announce',
      aliases: ['ann', 'a'],
      group: 'mod',
      memberName: 'announce',
      clientPermissions: ['MANAGE_MESSAGES'],
      userPermissions: ['MANAGE_MESSAGES'],
      description: 'Send an announcement to the guild\'s announcements channel',
      examples: ['ann Hello, world!'],
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
    let channel = msg.guild.channels.find(c => c.name === "📣｜announcements")
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