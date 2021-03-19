const Discord = require('discord.js');
module.exports = {
	name: 'channels',
	description: 'Lists the channels in this server',
	execute(message) {
		const channelsEmbed = new Discord.MessageEmbed()
			.setColor('#32e677')
			.setTitle('Channels')
			.addFields(
				{ name: 'Here are the channels in this server', value: message.guild.channels.cache.filter(channel => channel.type !== 'category').map(channel => channel.name).join('\n') },
			);

		message.channel.send(channelsEmbed);
	},
};