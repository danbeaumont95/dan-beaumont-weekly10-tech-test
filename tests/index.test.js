const { convertToPigLatin } = require('../index');

describe('convertToPigLatin', () => {
	it('returns an empty string when passed an empty string', () => {
		const emptyStringTest = convertToPigLatin('');
		expect(emptyStringTest).toBe('');
	});
	it('returns 1 word parameter converted to pig latin', () => {
		const oneWordTest = convertToPigLatin('dog');
		expect(oneWordTest).toBe('ogday');
	});
	it('returns any english sentence into Pig Latin', () => {
		const sentence = convertToPigLatin('walking the dog');
		expect(sentence).toBe('alkingway hetay ogday');
	});
	it('takes into account extra spaces/empty strings', () => {
		const sentence = convertToPigLatin('walking  the dog');
		expect(sentence).toBe('alkingway  hetay ogday');
	});
	it('works with a mix of capital and lower case letters', () => {
		const sentence = convertToPigLatin('Walking tHe doG');
		expect(sentence).toBe('alkingWay Hetay oGday');
	});
	it('words with special characters', () => {
		const sentence = convertToPigLatin('w-alking the dog');
		expect(sentence).toBe('-alkingway hetay ogday');
	});
	it('words with special characters as the first character of a word', () => {
		const sentence = convertToPigLatin('w-alking -the -dog');
		expect(sentence).toBe('-alkingway the-ay dog-ay');
	});
});
