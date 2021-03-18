const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Instructions on how to use Cactus',
	execute(message) {
		const helpEmbed = new Discord.MessageEmbed()
			.setColor('#32e677')
			.setTitle('Cactus Help')
			.setDescription(`It was wise of you to ask for help, ${message.author.username}.\n\nMy prefix is ${process.env.PREFIX} - any message intended to issue a command to me must begin with this prefix.`)
			.addFields(
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Current Commands', value: message.client.commands.map(c => c.name).join('\n') },
			);

		message.channel.send(helpEmbed);
	},
};