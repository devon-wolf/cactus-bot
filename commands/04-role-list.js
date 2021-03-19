const Discord = require('discord.js');
module.exports = {
	name: 'roles',
	description: 'Lists this server\'s roles',
	execute(message) {
		const rolesEmbed = new Discord.MessageEmbed()
			.setColor('#32e677')
			.setTitle('Roles')
			.addFields(
				{ name: 'Here are the roles in this server', value: message.guild.roles.cache.map(role => role.name === '@everyone' ? 'everyone' : role.name).join('\n') },
			);

		message.channel.send(rolesEmbed);
	},
};