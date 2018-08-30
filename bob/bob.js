class Bob {

  hey(phrase) {
    this.phrase = phrase;
    this.phrase = this.removeSuperfluousSpacesAndCharacters();
    if(!this.phrase.length) return 'Fine. Be that way!';
    if(this.isUpperCase() && !this.isQuestion() && !this.isNumbers()) return 'Whoa, chill out!';
    if(this.isQuestion()) return this.questionResponse();
    return 'Whatever.';
  }

  isQuestion() {
    return this.phrase.slice(-1) === '?';
  }

  removeSuperfluousSpacesAndCharacters() {
    return this.phrase.replace(/[^a-zA-Z|0-9|?]/g, '');
  }

  isUpperCase() {
    return this.phrase === this.phrase.toUpperCase();
  }

  isNumbers() {
    return !/\D/.test(this.phrase);
  }

  questionResponse() {
    this.phrase = this.phrase.slice(0, -1);
    return !this.isUpperCase() || this.isNumbers() ? 'Sure.' : 'Calm down, I know what I\'m doing!';
  }
}

module.exports = Bob;
