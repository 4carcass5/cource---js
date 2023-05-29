//BEGIN
const makeCensored = (text, stopWords) => {
    const words = text.split(' ');
    const censoredWords = words.map((word) => {
      return stopWords.includes(word.toLowerCase()) ? '$#%!' : word;
    });
    return censoredWords.join(' ');
  };
  export default makeCensored;
  //END