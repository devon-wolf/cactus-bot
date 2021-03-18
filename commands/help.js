const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Instructions on how to use Cactus',
	execute(message) {
		message.channel.send(
			`It was wise of you to ask for help, ${message.author.username}.\n\n
		My prefix is ${prefix} - based on my current instructions, any message intended to issue a command to me must begin with this prefix.\n\n
		Here is the list of my current commands:\n
		${message.client.commands.map(c => c.name).join('\n')}`);
	},
};