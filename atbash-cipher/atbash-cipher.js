const alphabet = 'abcdefghijklmnopqrstuvwxyz123456789';
const cipher = 'zyxwvutsrqponmlkjihgfedcba123456789';

const encode = (word) =>
  word.toLowerCase().split('').map(character => {
    const encodedIndex = alphabet.indexOf(character);
    return cipher[encodedIndex];
  }).join('').match(/.{1,5}/g).join(' ');


module.exports = { encode };
