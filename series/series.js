class Series {
  constructor(digits) {
    this.digits = digits.split('').map(num => +num);
  }

  slices(num) {
    if (num > this.digits.length) throw new Error('Slice size is too big.');
    const slicesArray = [];
    for (let i = 0; i < this.digits.length; i += 1) {
      const digitsToPush = this.digits.slice(i, num + i);
      if (digitsToPush.length === num) slicesArray.push(digitsToPush);
    }
    return slicesArray;
  }
}

module.exports = Series;
