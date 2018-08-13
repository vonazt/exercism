const Pangram = function(string) {
  this.isPangram = function() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    string.toLowerCase().split('').forEach(character => {
      if(character.match(/[a-z]/)) {
        alphabet = alphabet.replace(character, '');
      }
    });
    return alphabet.length === 0;
  };
};

module.exports = Pangram;
