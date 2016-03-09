const tarot = require('corpora/data/divination/tarot_interpretations.json'),
  tarotDeck = tarot.tarot_interpretations;

function uniquePluck(arr, prop) {
  var types = {};

  arr.forEach( (element) => {types[element[prop]] = true;} );

  return Object.keys(types);
};

function getMajorArcana() {
  return getBySuit('major');
};

function getMinorArcana() {
  var minorSuits = getSuits().filter( (element) => {return element != 'major';} );

  return minorSuits.reduce( (accumulator, suit) => {
    return accumulator.concat(getBySuit(suit));
  }, []);

};

function getSuits() {
  return uniquePluck(tarotDeck, 'suit');
};

function getBySuit(suit) {
  return tarotDeck.filter( (element) => {return element.suit === suit;} );
};

function getByRank(rank) {
  return tarotDeck.find( (element) => {return element.rank == rank;} );
};

module.exports = {
  tarotDeck,
  getBySuit,
  getByRank,
  suits: getSuits(),
  minorArcana: getMinorArcana(),
  majorArcana: getMajorArcana(),

};
