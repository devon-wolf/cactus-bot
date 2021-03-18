module.exports = {
	name: 'channels',
	description: 'Lists the channels in this server',
	execute(message) {
		message.channel.send(`Here are the channels in this server:\n
		${message.guild.channels.cache
		.filter(c => c.type !== 'category')
		.map(c => c.name)
		.join('\n')}`,
		);
	},
};