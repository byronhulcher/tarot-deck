'use strict';

exports.__esModule = true;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tarot = require('corpora/data/divination/tarot_interpretations.json'),
    tarotDeck = tarot.tarot_interpretations;

function uniquePluck(arr, prop) {
  var types = {};

  arr.forEach(function (element) {
    types[element[prop]] = true;
  });

  return (0, _keys2.default)(types);
};

function getMajorArcana() {
  return getBySuit('major');
};

function getMinorArcana() {
  var minorSuits = getSuits().filter(function (element) {
    return element != 'major';
  });

  return minorSuits.reduce(function (accumulator, suit) {
    return accumulator.concat(getBySuit(suit));
  }, []);
};

function getSuits() {
  return uniquePluck(tarotDeck, 'suit');
};

function getBySuit(suit) {
  return tarotDeck.filter(function (element) {
    return element.suit === suit;
  });
};

function getByRank(rank) {
  return tarotDeck.find(function (element) {
    return element.rank == rank;
  });
};

exports.default = {
  tarotDeck: tarotDeck,
  getBySuit: getBySuit,
  getByRank: getByRank,
  suits: getSuits(),
  minorArcana: getMinorArcana(),
  majorArcana: getMajorArcana()

};
module.exports = exports['default'];