const Raindrops = function() {
  this.convert = function(num) {
    const rainSounds = {
      3: 'Pling',
      5: 'Plang',
      7: 'Plong'
    };
    let soundOfRain = '';
    for(let i=1; i <= num; i++) {
      if(num % i === 0 && rainSounds[i]) soundOfRain += rainSounds[i];
    }
    return soundOfRain.length > 0 ? soundOfRain : num.toString();
  };
};

module.exports = Raindrops;
