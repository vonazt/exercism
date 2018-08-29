class Bob {

  hey(phrase) {
    this.phrase = phrase;
    this.phrase = this.removeSuperfluousSpacesAndCharacters(this.phrase);
    const phraseType = this.phrase.slice(-1);
    if(!this.phrase.length) return 'Fine. Be that way!';
    if(this.isUpperCase(this.phrase) && phraseType !== '?' && !this.isNumbers(this.phrase)) return 'Whoa, chill out!';
    if(phraseType === '?') return this.checkQuestion(this.phrase);
    else return 'Whatever.';
  }

  removeSuperfluousSpacesAndCharacters(phrase) {
    return phrase.replace(/[^a-zA-Z|0-9|?]/g, '');
  }

  isUpperCase(phrase) {
    return phrase === phrase.toUpperCase();
  }

  isNumbers(phrase) {
    return !/\D/.test(phrase);
  }

  checkQuestion(phrase) {
    return !this.isUpperCase(phrase) || this.isNumbers(phrase.slice(0, -1)) ? 'Sure.' : 'Calm down, I know what I\'m doing!';
  }
}

module.exports = Bob;
