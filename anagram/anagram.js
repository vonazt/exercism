class Anagram {
  constructor(subject) {
    this.subject = subject;
  }

  matches(words) {
    words = Array.isArray(words) ? words : [].slice.call(arguments, 0);
    return words.filter(word => {
      return this.isNotSameWord(word, this.subject) && this.isAnagram(word, this.subject);
    });
  }

  isNotSameWord(word, subject) {
    return word.toLowerCase() !== subject.toLowerCase();
  }

  isAnagram(word, subject) {
    return word.toLowerCase().split('').sort().join('') === subject.toLowerCase().split('').sort().join('');
  }
}

module.exports = Anagram;
