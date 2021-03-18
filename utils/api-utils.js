const request = require('superagent');

const URL = 'https://www.dictionaryapi.com/api/v3/references';

async function getThesaurusData(word) {
	const response = await request.get(`${URL}/thesaurus/json/${word}?key=${process.env.THESAURUS_KEY}`);

	return response.body;
}

async function getDictionaryData(word) {
	const response = await request.get(`${URL}/collegiate/json/${word}?key=${process.env.DICTIONARY_KEY}`);

	return response.body;
}

module.exports = { getThesaurusData, getDictionaryData };