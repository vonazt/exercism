const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function Cipher(key) {
  if(key === '' || (key && key.match(/[^a-z]/))) throw new Error('Bad key');
  this.key = key || createRandomKey();
}

Cipher.prototype.encode = function(word) {
  let key = this.key;
  while(key.length < word.length) key += key;

  return word.split('').map((character, index) => {
    let encodedIndex = alphabet.indexOf(character) + alphabet.indexOf(key[index]);
    if (encodedIndex >= alphabet.length) encodedIndex -= alphabet.length;
    return alphabet[encodedIndex];
  }).join('');
};

Cipher.prototype.decode = function(word) {
  const key = this.key;

  return word.split('').map((character, index) => {
    let decodedIndex = alphabet.indexOf(character) - alphabet.indexOf(key[index]);
    if (decodedIndex < 0) decodedIndex += alphabet.length;
    return alphabet[decodedIndex];
  }).join('');
};

function createRandomKey() {
  return [...Array(100)].map(() => (~~(Math.random() * (36 - 10) + 10)).toString(36)).join('');
}

module.exports = Cipher;
