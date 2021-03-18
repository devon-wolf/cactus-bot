module.exports = {
	name: 'roles',
	description: 'Lists this server\'s roles',
	execute(message) {
		message.channel.send(`Here are the roles in this server:\n
		${message.guild.roles.cache.map(r => {
		if (r.name === '@everyone') {
			return 'everyone';
		}
		else {
			return r.name;
		}
	}).join('\n')}`);
	},
};