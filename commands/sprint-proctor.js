// !sprint-proctor command to restrict channels
// needs to get info about sprint time
// needs to get info about users to affect
// needs access to change permissions (or create a new role and add and remove users to it)
// users should be able to opt out if assigned by group
// or opt-in to assign it individually
// needs aliases: 'sprint proctor', 'proctor', 'sprintproctor', maybe misspellings w/ -er, etc

module.exports = {
	name: 'sprint-proctor',
	description: 'There\'s a new daddy in town...',
	execute(message) {
		message.channel.send(`You made the right choice, ${message.author.username}. Too bad I can't do anything about it. Learn some discipline and maybe you won't need me by the time I'm smart enough to 'help' you.`);
	},
};
