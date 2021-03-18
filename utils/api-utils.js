const request = require('superagent');
const { thesaurusKey, dictionaryKey } = require('../config.json');

const URL = 'https://www.dictionaryapi.com/api/v3/references';

async function getThesaurusData(word) {
	const response = await request.get(`${URL}/thesaurus/json/${word}?key=${thesaurusKey}`);

	return response.body;
}

async function getDictionaryData(word) {
	const response = await request.get(`${URL}/collegiate/json/${word}?key=${dictionaryKey}`);

	return response.body;
}

module.exports = { getThesaurusData, getDictionaryData };