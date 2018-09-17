const Beer = function() {
  const verse = function(number) {
    return `${this.number} bottles of beer on the wall, ${this.number} bottles of beer. Take one down and pass it around, ${this.number - 1} bottles of beer on the wall.`;
  }
}

module.exports = Beer;
