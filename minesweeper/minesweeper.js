class Minesweeper {
  annotate(input) {
    return input.map(row => {
      row.split('').forEach((square, index) => {
        if(square === '*') {
          return square[index + 1] += 1;
        }
      });
    });
  }
}

module.exports = Minesweeper;
