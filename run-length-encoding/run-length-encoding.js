const RLE = function (rle) {
  this.rle = rle;
};

RLE.encode = function (string) {
  if (string === '') return '';
  //regex creates an array with breaks between different characters, then ternaray operater makes sure that, e.g, A is returned, not 1A, then array is joined up
  return string.match(/(.)\1*/g).map(characterSet => characterSet.length > 1 ? (`${characterSet.length}${characterSet[0]}`) : (`${characterSet[0]}`)).join('');
};

RLE.decode = function(encodedString) {
  return encodedString.replace(/(\d+)(\w|\s)/g, function (match, repeats, char) {
    return new Array(+repeats + 1).join(char);
  });
};

module.exports = RLE;
