const Hamming = function() {
  this.compute = function(strand1, strand2) {
    if(strand1.length !== strand2.length) throw new Error('DNA strands must be of equal length.');
    let hammingDistance = 0;
    for(let i=0; i < strand1.length; i++) {
      if(strand1[i] !== strand2[i]) hammingDistance ++;
    }
    return hammingDistance;
  };
};

module.exports = Hamming;
