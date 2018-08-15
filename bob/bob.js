class Bob {
  hey(phrase) {
    phrase = phrase.replace(/[^a-zA-Z|0-9|?]/g, '');
    const phraseType = phrase.slice(-1);
    if(!phrase.length) return 'Fine. Be that way!';
    if(isUpperCase(phrase) && phraseType !== '?' && !isNumbers(phrase)) return 'Whoa, chill out!';
    if(phraseType === '?') return checkQuestion(phrase);
    else return 'Whatever.';
  }
}

function isUpperCase(phrase) {
  return phrase === phrase.toUpperCase();
}

function isNumbers(phrase) {
  return !/\D/.test(phrase);
}

function checkQuestion(phrase) {
  return !isUpperCase(phrase) || isNumbers(phrase.slice(0, -1)) ? 'Sure.' : 'Calm down, I know what I\'m doing!';
}

module.exports = Bob;
