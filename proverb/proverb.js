const checkForQualifier = lastArg => typeof lastArg === 'object';

const proverb = (...items) => {
  let qualifier;
  const lastArg = items.slice(-1)[0];

  const itemChain = items.slice(0, -1).map((item, index) => `For want of a ${items[index]} the ${items[index + 1]} was lost.\n`);

  if (checkForQualifier(lastArg)) {
    itemChain.pop();
    qualifier = `${lastArg.qualifier} `;
  } else qualifier = '';

  return `${itemChain.join('')}And all for the want of a ${qualifier}${items[0]}.`;
};

module.exports = proverb;
