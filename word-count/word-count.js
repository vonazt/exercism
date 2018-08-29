class Word {
  count(phrase) {
    this.phrase = phrase;
    const wordCounts = Object.create(null);
    this.phrase = Word.formatPhrase(this.phrase);
    this.phrase.forEach((word) => {
      if (!word) return null;
      if (!(word in wordCounts)) wordCounts[word] = 1;
      else wordCounts[word] += 1;
    });
    return wordCounts;
  }

  static formatPhrase(phrase) {
    return phrase.toLowerCase().replace(/[\n\t\s\s+]/g, ' ').split(' ');
  }
}

module.exports = Word;
