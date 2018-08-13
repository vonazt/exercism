module.exports = {
  validate: function (input) {
    const digits = [...String(input)];
    const sum = digits.reduce((acc, number) =>
      (acc + Math.pow(number, digits.length)), 0);
    return sum === input;
  }
};
