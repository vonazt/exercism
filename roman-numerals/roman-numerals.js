const toRoman = function(num) {
  const romanDate = [];
  const romanNumerals = {
    1000: 'M',
    500: 'D',
    100: 'C',
    50: 'L',
    10: 'X',
    5: 'V',
    1: 'I'
  };
  Object.keys(romanNumerals).sort((a, b) => b-a).forEach(numeral => {
    while(num >= numeral) {
      romanDate.push(romanNumerals[numeral]);
      num -= numeral;
    }
  });
  return replaceNumerals([
    [/VIIII/, 'IX'],
    [/IIII/, 'IV'],
    [/LXXXX/, 'XC'],
    [/XXXX/, 'XL'],
    [/DCCCC/, 'CM'],
    [/CCCC/, 'CD'],
    [/DD/, 'CM']
  ], romanDate.join(''));
};

const replaceNumerals = function(replacements, string) {
  for (const [x, y] of replacements)
    string = string.replace(x, y);
  return string;
};

module.exports = toRoman;
