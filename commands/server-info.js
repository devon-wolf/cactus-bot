module.exports = {
	name: 'server-info',
	description: 'Provides information about the current server',
	execute(message) {
		message.channel.send(`This server's name is: ${message.guild.name}\n
		Total members: ${message.guild.memberCount}\n
		Created on: ${message.guild.createdAt}`);
	},
};