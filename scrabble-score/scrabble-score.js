const score = function(word) {
  let score = 0;
  if(!word) return score;
  const scrabblePoints = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j', 'x'],
    10: ['q', 'z']
  };

  word.toLowerCase().split('').forEach(letter => {
    Object.keys(scrabblePoints).forEach(points => {
      if(scrabblePoints[points].includes(letter)) score += +points;
    }); 
  });
  return score;
};

module.exports = score;
