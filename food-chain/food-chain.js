class Song {
  verse(stanza) {
    this.stanza = stanza;

    const animals = {
      1: 'fly',
      2: 'spider',
      3: 'bird',
      4: 'cat',
      5: 'dog',
      6: 'goat',
      7: 'cow',
      8: 'horse',
    };

    function firstLine() {
      return `I know an old lady who swallowed a ${animals[stanza]}.\n`;
    }

    function secondLine() {
      const actions = {
        2: 'It wriggled and jiggled and tickled inside her.\n',
        3: 'How absurd to swallow a bird!\n',
        4: 'Imagine that, to swallow a cat!\n',
        5: 'What a hog, to swallow a dog!\n',
        6: 'Just opened her throat and swallowed a goat!\n',
        7: 'I don\'t know how she swallowed a cow!\n',
      };
      return actions[stanza];
    }

    function middleLines() {
      if (stanza === 8) return '';
      const animalChain = [];
      for (let i = stanza; i > 3; i -= 1) {
        animalChain.push(`She swallowed the ${animals[i]} to catch the ${animals[i - 1]}.\n`);
      }
      return animalChain.join('');
    }

    function penultimateLine() {
      const catcher = stanza > 2 && stanza < 8 ? 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' : '';
      return catcher;
    }

    function lastLine() {
      if (stanza === 8) return 'She\'s dead, of course!\n';
      const coda = stanza > 1 ? 'She swallowed the spider to catch the fly.\n' : '';
      return `${coda}I don't know why she swallowed the fly. Perhaps she'll die.\n`;
    }

    const lines = [firstLine(), secondLine(), middleLines(), penultimateLine(), lastLine()];
    return lines.join('');
  }

  verses(firstStanza, lastStanza) {
    this.firstStanza = firstStanza;
    this.lastStanza = lastStanza;
    const versesArray = [];

    for (let i = firstStanza; i < lastStanza + 1; i += 1) {
      versesArray.push(this.verse(i), '\n');
    }

    return versesArray.join('');
  }
}

module.exports = Song;
