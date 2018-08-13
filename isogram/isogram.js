const Isogram = function(string) {
  this.isIsogram = function() {
    string = string.toLowerCase().replace(/[- ]/g, '').split('').sort();
    return string.every((character, index) => string.indexOf(character, index + 1) === -1);
  };
};

module.exports = Isogram;
