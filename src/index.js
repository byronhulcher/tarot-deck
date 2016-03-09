const tarot = require('corpora/data/divination/tarot_interpretations.json');

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

export const tarotDeck = tarot.tarot_interpretations;

export function getBySuit(suit) {
  return tarotDeck.filter( (element) => {return element.suit === suit;} );
};

export function getByRank(rank) {
  return tarotDeck.find( (element) => {return element.rank == rank;} );
};

export const suits = getSuits();

export const minorArcana = getMinorArcana();

export const majorArcana = getMajorArcana();
