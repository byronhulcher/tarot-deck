let tarot = require('corpora/data/divination/tarot_interpretations.json'),
  tarotDeck = tarot.tarot_interpretations;

function uniquePluck(arr, prop) {
  var types = {};

  arr.forEach(function (element) {
    types[element[prop]] = true;
  });

  return Object.keys(types);
};

function getMajorArcana() {
  return getBySuit('major');
};

function getMinorArcana() {
  var minorSuits = getSuits().filter(function (element) {return element != 'major';});

  return minorSuits.reduce(function (accumulator, suit) {
    return accumulator.concat(getBySuit(suit));
  }, []);

};

function getMinorArcana() {
  return uniquePluck(tarotDeck, 'suit');
};

function getBySuit(suit) {
  return tarotDeck.filter(function (element) {return element.suit === suit;});
};

function getBySuit(rank) {
  return tarotDeck.find(function (element) {return element.rank == rank;});
};

module.exports = {
  tarotDeck,
  getBySuit,
  getByRank,
  suits: getSuits(),
  minorArcana: getMinorArcana(),
  majorArcana: getMajorArcana(),

};
