class PigLatin {
  translate(string) {
    this.string = string;
    const vowels = 'aeiou';
    const twoLetterEdgeCases = ['ch', 'qu', 'th'];
    const threeLetterEdgeCases = ['thr', 'sch'];
    const words = string.split(' ');

    return words.map((word) => {
      if (vowels.includes(word[0])) return `${word}ay`;
      if (threeLetterEdgeCases.includes(word.slice(0, 3))) return `${word.slice(3)}${word.slice(0, 3)}ay`;
      if (twoLetterEdgeCases.includes(word.slice(0, 2))) return `${word.slice(2)}${word.slice(0, 2)}ay`;
      if (!vowels.includes(word[0]) && word.slice(1, 3) === 'qu') return `${word.slice(3)}${word.slice(0, 3)}ay`;
      return `${word.slice(1)}${word[0]}ay`;
    }).join(' ');
  }
}

module.exports = PigLatin;
