const { getThesaurusData, getDictionaryData } = require('./api-utils.js');

// shape some very basic thesaurus results
async function shapeThesaurusResults(word) {
	const rawResponse = await getThesaurusData(word);

	// just the first for now
	const result = rawResponse[0];
	// console.log('RESULT SUB ZERO', result);
	// console.log('syns', result.meta.syns);
	// console.log('ants', result.meta.ants);
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

	// need to fill the rest of this function out
	return result;
}

module.exports = {
	shapeThesaurusResults,
	shapeDictionaryResults,
};