const Discord = require('discord.js');
module.exports = {
	name: 'server-info',
	description: 'Provides information about the current server',
	execute(message) {
		const infoEmbed = new Discord.MessageEmbed()
			.setColor('#32e677')
			.setTitle('Server Info')
			.addFields(
				{ name: 'Server name', value: message.guild.name },
				{ name: 'Total members', value: message.guild.memberCount },
				{ name: 'Created on', value: message.guild.createdAt },
			);

		message.channel.send(infoEmbed);
	},
};