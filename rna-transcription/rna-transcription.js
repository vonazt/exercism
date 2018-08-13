const DnaTranscriber = function() {
  this.toRna = function(nucleotide) {

    const rnaPairs = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U'
    };

    return nucleotide.split('').map(nucleotide => {
      if (rnaPairs[nucleotide] === undefined) throw new Error('Invalid input');
      return rnaPairs[nucleotide];
    }).join('');
  };
};

module.exports = DnaTranscriber;
