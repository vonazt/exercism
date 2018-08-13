const Triangle = function(side1, side2, side3) {
  this.kind = function() {
    
    const sideArray = [side1, side2, side3].sort((a,b) => a-b);
    sideArray.forEach(side => {
      if(side <= 0 || (sideArray[0] + sideArray[1] < sideArray[2])) throw new Error;
    });

    return (side1 === side2 && side2 === side3) && 'equilateral'
    || (side1 === side2 || side2 === side3 || side1 === side3) && 'isosceles'
    || 'scalene';
  };
};

module.exports = Triangle;
