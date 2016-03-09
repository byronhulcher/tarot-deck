'use strict';

exports.__esModule = true;
exports.majorArcana = exports.minorArcana = exports.suits = exports.tarotDeck = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.getBySuit = getBySuit;
exports.getByRank = getByRank;
exports.drawCard = drawCard;
exports.drawReading = drawReading;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tarot = require('corpora/data/divination/tarot_interpretations.json'),
    array = require('array-range');

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

var tarotDeck = exports.tarotDeck = tarot.tarot_interpretations;

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

var suits = exports.suits = getSuits();

var minorArcana = exports.minorArcana = getMinorArcana();

var majorArcana = exports.majorArcana = getMajorArcana();

function drawCard() {
  var deck = arguments.length <= 0 || arguments[0] === undefined ? tarotDeck : arguments[0];

  if (deck.length <= 0) return;
  var chosenCard = deck[Math.floor(Math.random() * deck.length)];
  chosenCard.reversed = Math.random() < .5;
  return chosenCard;
};

function drawReading() {
  var numberOfCards = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];
  var originalDeck = arguments.length <= 1 || arguments[1] === undefined ? tarotDeck : arguments[1];

  var deck = originalDeck.slice();

  return array(numberOfCards).map(function () {
    var card = drawCard(deck);
    deck.splice(deck.indexOf(card), 1);
    return card;
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7UUE4QmdCO1FBSUE7UUFVQTtRQU9BOzs7O0FBbkRoQixJQUFNLFFBQVEsUUFBUSxvREFBUixDQUFSO0lBQ0osUUFBUSxRQUFRLGFBQVIsQ0FBUjs7QUFFRixTQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEIsSUFBMUIsRUFBZ0M7QUFDOUIsTUFBSSxRQUFRLEVBQVIsQ0FEMEI7O0FBRzlCLE1BQUksT0FBSixDQUFhLFVBQUMsT0FBRCxFQUFhO0FBQUMsVUFBTSxRQUFRLElBQVIsQ0FBTixJQUF1QixJQUF2QixDQUFEO0dBQWIsQ0FBYixDQUg4Qjs7QUFLOUIsU0FBTyxvQkFBWSxLQUFaLENBQVAsQ0FMOEI7Q0FBaEM7O0FBUUEsU0FBUyxjQUFULEdBQTBCO0FBQ3hCLFNBQU8sVUFBVSxPQUFWLENBQVAsQ0FEd0I7Q0FBMUI7O0FBSUEsU0FBUyxjQUFULEdBQTBCO0FBQ3hCLE1BQUksYUFBYSxXQUFXLE1BQVgsQ0FBbUIsVUFBQyxPQUFELEVBQWE7QUFBQyxXQUFPLFdBQVcsT0FBWCxDQUFSO0dBQWIsQ0FBaEMsQ0FEb0I7O0FBR3hCLFNBQU8sV0FBVyxNQUFYLENBQW1CLFVBQUMsV0FBRCxFQUFjLElBQWQsRUFBdUI7QUFDL0MsV0FBTyxZQUFZLE1BQVosQ0FBbUIsVUFBVSxJQUFWLENBQW5CLENBQVAsQ0FEK0M7R0FBdkIsRUFFdkIsRUFGSSxDQUFQLENBSHdCO0NBQTFCOztBQVNBLFNBQVMsUUFBVCxHQUFvQjtBQUNsQixTQUFPLFlBQVksU0FBWixFQUF1QixNQUF2QixDQUFQLENBRGtCO0NBQXBCOztBQUlPLElBQU0sZ0NBQVksTUFBTSxxQkFBTjs7QUFFbEIsU0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCO0FBQzlCLFNBQU8sVUFBVSxNQUFWLENBQWtCLFVBQUMsT0FBRCxFQUFhO0FBQUMsV0FBTyxRQUFRLElBQVIsS0FBaUIsSUFBakIsQ0FBUjtHQUFiLENBQXpCLENBRDhCO0NBQXpCOztBQUlBLFNBQVMsU0FBVCxDQUFtQixJQUFuQixFQUF5QjtBQUM5QixTQUFPLFVBQVUsSUFBVixDQUFnQixVQUFDLE9BQUQsRUFBYTtBQUFDLFdBQU8sUUFBUSxJQUFSLElBQWdCLElBQWhCLENBQVI7R0FBYixDQUF2QixDQUQ4QjtDQUF6Qjs7QUFJQSxJQUFNLHdCQUFRLFVBQVI7O0FBRU4sSUFBTSxvQ0FBYyxnQkFBZDs7QUFFTixJQUFNLG9DQUFjLGdCQUFkOztBQUVOLFNBQVMsUUFBVCxHQUFtQztNQUFqQiw2REFBTyx5QkFBVTs7QUFDeEMsTUFBSSxLQUFLLE1BQUwsSUFBZSxDQUFmLEVBQWtCLE9BQXRCO0FBQ0EsTUFBSSxhQUFhLEtBQUssS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLEtBQUssTUFBTCxDQUFoQyxDQUFiLENBRm9DO0FBR3hDLGFBQVcsUUFBWCxHQUFzQixLQUFLLE1BQUwsS0FBYyxFQUFkLENBSGtCO0FBSXhDLFNBQU8sVUFBUCxDQUp3QztDQUFuQzs7QUFPQSxTQUFTLFdBQVQsR0FBaUU7TUFBNUMsc0VBQWdCLGlCQUE0QjtNQUF6QixxRUFBZSx5QkFBVTs7QUFDdEUsTUFBTSxPQUFPLGFBQWEsS0FBYixFQUFQLENBRGdFOztBQUd0RSxTQUFPLE1BQU0sYUFBTixFQUFxQixHQUFyQixDQUEwQixZQUFNO0FBQ3JDLFFBQUksT0FBTyxTQUFTLElBQVQsQ0FBUCxDQURpQztBQUVyQyxTQUFLLE1BQUwsQ0FBWSxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQVosRUFBZ0MsQ0FBaEMsRUFGcUM7QUFHckMsV0FBTyxJQUFQLENBSHFDO0dBQU4sQ0FBakMsQ0FIc0U7Q0FBakUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXJvdCA9IHJlcXVpcmUoJ2NvcnBvcmEvZGF0YS9kaXZpbmF0aW9uL3Rhcm90X2ludGVycHJldGF0aW9ucy5qc29uJyksXG4gIGFycmF5ID0gcmVxdWlyZSgnYXJyYXktcmFuZ2UnKTtcbiAgXG5mdW5jdGlvbiB1bmlxdWVQbHVjayhhcnIsIHByb3ApIHtcbiAgdmFyIHR5cGVzID0ge307XG5cbiAgYXJyLmZvckVhY2goIChlbGVtZW50KSA9PiB7dHlwZXNbZWxlbWVudFtwcm9wXV0gPSB0cnVlO30gKTtcblxuICByZXR1cm4gT2JqZWN0LmtleXModHlwZXMpO1xufTtcblxuZnVuY3Rpb24gZ2V0TWFqb3JBcmNhbmEoKSB7XG4gIHJldHVybiBnZXRCeVN1aXQoJ21ham9yJyk7XG59O1xuXG5mdW5jdGlvbiBnZXRNaW5vckFyY2FuYSgpIHtcbiAgdmFyIG1pbm9yU3VpdHMgPSBnZXRTdWl0cygpLmZpbHRlciggKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudCAhPSAnbWFqb3InO30gKTtcblxuICByZXR1cm4gbWlub3JTdWl0cy5yZWR1Y2UoIChhY2N1bXVsYXRvciwgc3VpdCkgPT4ge1xuICAgIHJldHVybiBhY2N1bXVsYXRvci5jb25jYXQoZ2V0QnlTdWl0KHN1aXQpKTtcbiAgfSwgW10pO1xuXG59O1xuXG5mdW5jdGlvbiBnZXRTdWl0cygpIHtcbiAgcmV0dXJuIHVuaXF1ZVBsdWNrKHRhcm90RGVjaywgJ3N1aXQnKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0YXJvdERlY2sgPSB0YXJvdC50YXJvdF9pbnRlcnByZXRhdGlvbnM7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCeVN1aXQoc3VpdCkge1xuICByZXR1cm4gdGFyb3REZWNrLmZpbHRlciggKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudC5zdWl0ID09PSBzdWl0O30gKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCeVJhbmsocmFuaykge1xuICByZXR1cm4gdGFyb3REZWNrLmZpbmQoIChlbGVtZW50KSA9PiB7cmV0dXJuIGVsZW1lbnQucmFuayA9PSByYW5rO30gKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdWl0cyA9IGdldFN1aXRzKCk7XG5cbmV4cG9ydCBjb25zdCBtaW5vckFyY2FuYSA9IGdldE1pbm9yQXJjYW5hKCk7XG5cbmV4cG9ydCBjb25zdCBtYWpvckFyY2FuYSA9IGdldE1ham9yQXJjYW5hKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FyZChkZWNrID0gdGFyb3REZWNrKXtcbiAgaWYgKGRlY2subGVuZ3RoIDw9IDApIHJldHVybjtcbiAgbGV0IGNob3NlbkNhcmQgPSBkZWNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRlY2subGVuZ3RoKV07XG4gIGNob3NlbkNhcmQucmV2ZXJzZWQgPSBNYXRoLnJhbmRvbSgpPC41O1xuICByZXR1cm4gY2hvc2VuQ2FyZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3UmVhZGluZyhudW1iZXJPZkNhcmRzID0gMywgb3JpZ2luYWxEZWNrID0gdGFyb3REZWNrKXtcbiAgY29uc3QgZGVjayA9IG9yaWdpbmFsRGVjay5zbGljZSgpO1xuICBcbiAgcmV0dXJuIGFycmF5KG51bWJlck9mQ2FyZHMpLm1hcCggKCkgPT4ge1xuICAgIGxldCBjYXJkID0gZHJhd0NhcmQoZGVjayk7XG4gICAgZGVjay5zcGxpY2UoZGVjay5pbmRleE9mKGNhcmQpLCAxKTtcbiAgICByZXR1cm4gY2FyZDtcbiAgfSk7XG59Il19