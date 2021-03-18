const Discord = require('discord.js');
const { shapeThesaurusResults } = require('../utils/munge-utils.js');

module.exports = {
	name: 'lookup',
	description: 'Returns the results of a thesaurus search',
	async execute(message, word) {
		const results = await shapeThesaurusResults(word);

		const synonyms = () => {
			if (results.synonyms) return results.synonyms.join('\n');
			else return 'none';
		};

		const antonyms = () => {
			if (results.antonyms) return results.antonyms.join('\n');
			else return 'none';
		};

		const definition = () => {
			if (results.definition) return results.definition;
			else return 'none';
		};

		const resultsEmbed = new Discord.MessageEmbed()
			.setColor('#32e677')
			.setTitle(`${word}`)
			.setDescription(definition())
			.addFields(
				{ name: 'Synonyms', value: synonyms(), inline: true },
				{ name: 'Antonyms', value: antonyms(), inline: true },
				{ name: '\u200B', value: '\u200B' },
			)
			.setFooter('Results from Merriam-Webster');

		message.channel.send(resultsEmbed);
	},
};