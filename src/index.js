const tarot = require('corpora/data/divination/tarot_interpretations.json'),
  array = require('array-range');
  
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

export function drawCard(deck = tarotDeck){
  if (deck.length <= 0) return;
  let chosenCard = deck[Math.floor(Math.random() * deck.length)];
  chosenCard.reversed = Math.random()<.5;
  return chosenCard;
};

export function drawReading(numberOfCards = 3, originalDeck = tarotDeck){
  const deck = originalDeck.slice();
  
  return array(Math.min(numberOfCards, deck.length)).map( () => {
    let card = drawCard(deck);
    deck.splice(deck.indexOf(card), 1);
    return card;
  });
}