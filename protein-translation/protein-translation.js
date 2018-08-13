const translate = function(rnaString) {
  if(!rnaString) return [];
  const proteinArray = [];
  const aminoAcids = {
    Methionine: ['AUG'],
    Phenylalanine: ['UUU', 'UUC'],
    Leucine: ['UUA', 'UUG'],
    Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
    Tyrosine: ['UAU', 'UAC'],
    Cysteine: ['UGU', 'UGC'],
    Tryptophan: ['UGG'],
    STOP: ['UAA', 'UAG', 'UGA']
  };

  let splitString = rnaString.match(/.{1,3}/g);
  aminoAcids['STOP'].forEach(codon => {
    if(splitString.includes(codon)) splitString = splitString.slice(0, splitString.indexOf(codon));
  });

  for(const protein in aminoAcids) {
    splitString.forEach(string => {
      if(aminoAcids[protein].includes(string)) proteinArray.push(protein);
    });
  }
  return proteinArray;
};

module.exports = translate;
