const { getThesaurusData, getDictionaryData } = require('./api-utils.js');

// shape some very basic thesaurus results
async function shapeThesaurusResults(word) {
	const rawResponse = await getThesaurusData(word);

	// just the first for now
	const result = rawResponse[0];

	const synonymArray = result.meta.syns[0];
	const antonymArray = result.meta.ants[0];
	const definition = result.shortdef;

	return {
		synonyms: synonymArray,
		antonyms: antonymArray,
		definition: definition,
	};
}

async function shapeDictionaryResults(word) {
	const rawResponse = await getDictionaryData(word);

	// just the first for now
	const result = rawResponse[0];

	// returns an array of quick definitions
	return result.shortdef;
}

module.exports = {
	shapeThesaurusResults,
	shapeDictionaryResults,
};