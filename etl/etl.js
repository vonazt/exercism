const ETL = function() {
  this.transform = function(old) {
    const newScore = {};
    for (const points in old) {
      const letters = old[points];
      for (const index in letters) {
        newScore[letters[index].toLowerCase()] = +points;
      }
    }
    return newScore;
  };
};

module.exports = ETL;
