const convertToPigLatin = (sentence) => {
	if (!sentence.length) return sentence;

	const arrayOfWords = sentence.split(' ');
	const pigLetters = 'ay';
	const isLetterRegex = /[A-Za-z]/;

	/*
    This maps through all the words in the sentence array, if the word is
    an empty string or not an uppercase or lower case letter, it returns the word.
    If it is a word, it gets the first letter,
    removes that letter, then adds the first letter and ay onto the end of the word
  */
	const pigLatinWordsArray = arrayOfWords
		.map((word) => (!word.length || !isLetterRegex.test(word) ? word
			: word.slice(1).concat(word[0].concat(pigLetters))));

	return pigLatinWordsArray.join(' ');
};

module.exports = {
	convertToPigLatin,
};

// eslint-disable-next-line no-console
console.log(convertToPigLatin('walking the dog') === 'alkingway hetay ogday');
