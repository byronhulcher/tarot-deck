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

  return array(Math.min(numberOfCards, deck.length)).map(function () {
    var card = drawCard(deck);
    deck.splice(deck.indexOf(card), 1);
    return card;
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7UUE4QmdCO1FBSUE7UUFVQTtRQU9BOzs7O0FBbkRoQixJQUFNLFFBQVEsUUFBUSxvREFBUixDQUFSO0lBQ0osUUFBUSxRQUFRLGFBQVIsQ0FBUjs7QUFFRixTQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEIsSUFBMUIsRUFBZ0M7QUFDOUIsTUFBSSxRQUFRLEVBQVIsQ0FEMEI7O0FBRzlCLE1BQUksT0FBSixDQUFhLFVBQUMsT0FBRCxFQUFhO0FBQUMsVUFBTSxRQUFRLElBQVIsQ0FBTixJQUF1QixJQUF2QixDQUFEO0dBQWIsQ0FBYixDQUg4Qjs7QUFLOUIsU0FBTyxvQkFBWSxLQUFaLENBQVAsQ0FMOEI7Q0FBaEM7O0FBUUEsU0FBUyxjQUFULEdBQTBCO0FBQ3hCLFNBQU8sVUFBVSxPQUFWLENBQVAsQ0FEd0I7Q0FBMUI7O0FBSUEsU0FBUyxjQUFULEdBQTBCO0FBQ3hCLE1BQUksYUFBYSxXQUFXLE1BQVgsQ0FBbUIsVUFBQyxPQUFELEVBQWE7QUFBQyxXQUFPLFdBQVcsT0FBWCxDQUFSO0dBQWIsQ0FBaEMsQ0FEb0I7O0FBR3hCLFNBQU8sV0FBVyxNQUFYLENBQW1CLFVBQUMsV0FBRCxFQUFjLElBQWQsRUFBdUI7QUFDL0MsV0FBTyxZQUFZLE1BQVosQ0FBbUIsVUFBVSxJQUFWLENBQW5CLENBQVAsQ0FEK0M7R0FBdkIsRUFFdkIsRUFGSSxDQUFQLENBSHdCO0NBQTFCOztBQVNBLFNBQVMsUUFBVCxHQUFvQjtBQUNsQixTQUFPLFlBQVksU0FBWixFQUF1QixNQUF2QixDQUFQLENBRGtCO0NBQXBCOztBQUlPLElBQU0sZ0NBQVksTUFBTSxxQkFBTjs7QUFFbEIsU0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCO0FBQzlCLFNBQU8sVUFBVSxNQUFWLENBQWtCLFVBQUMsT0FBRCxFQUFhO0FBQUMsV0FBTyxRQUFRLElBQVIsS0FBaUIsSUFBakIsQ0FBUjtHQUFiLENBQXpCLENBRDhCO0NBQXpCOztBQUlBLFNBQVMsU0FBVCxDQUFtQixJQUFuQixFQUF5QjtBQUM5QixTQUFPLFVBQVUsSUFBVixDQUFnQixVQUFDLE9BQUQsRUFBYTtBQUFDLFdBQU8sUUFBUSxJQUFSLElBQWdCLElBQWhCLENBQVI7R0FBYixDQUF2QixDQUQ4QjtDQUF6Qjs7QUFJQSxJQUFNLHdCQUFRLFVBQVI7O0FBRU4sSUFBTSxvQ0FBYyxnQkFBZDs7QUFFTixJQUFNLG9DQUFjLGdCQUFkOztBQUVOLFNBQVMsUUFBVCxHQUFtQztNQUFqQiw2REFBTyx5QkFBVTs7QUFDeEMsTUFBSSxLQUFLLE1BQUwsSUFBZSxDQUFmLEVBQWtCLE9BQXRCO0FBQ0EsTUFBSSxhQUFhLEtBQUssS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLEtBQUssTUFBTCxDQUFoQyxDQUFiLENBRm9DO0FBR3hDLGFBQVcsUUFBWCxHQUFzQixLQUFLLE1BQUwsS0FBYyxFQUFkLENBSGtCO0FBSXhDLFNBQU8sVUFBUCxDQUp3QztDQUFuQzs7QUFPQSxTQUFTLFdBQVQsR0FBaUU7TUFBNUMsc0VBQWdCLGlCQUE0QjtNQUF6QixxRUFBZSx5QkFBVTs7QUFDdEUsTUFBTSxPQUFPLGFBQWEsS0FBYixFQUFQLENBRGdFOztBQUd0RSxTQUFPLE1BQU0sS0FBSyxHQUFMLENBQVMsYUFBVCxFQUF3QixLQUFLLE1BQUwsQ0FBOUIsRUFBNEMsR0FBNUMsQ0FBaUQsWUFBTTtBQUM1RCxRQUFJLE9BQU8sU0FBUyxJQUFULENBQVAsQ0FEd0Q7QUFFNUQsU0FBSyxNQUFMLENBQVksS0FBSyxPQUFMLENBQWEsSUFBYixDQUFaLEVBQWdDLENBQWhDLEVBRjREO0FBRzVELFdBQU8sSUFBUCxDQUg0RDtHQUFOLENBQXhELENBSHNFO0NBQWpFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFyb3QgPSByZXF1aXJlKCdjb3Jwb3JhL2RhdGEvZGl2aW5hdGlvbi90YXJvdF9pbnRlcnByZXRhdGlvbnMuanNvbicpLFxuICBhcnJheSA9IHJlcXVpcmUoJ2FycmF5LXJhbmdlJyk7XG4gIFxuZnVuY3Rpb24gdW5pcXVlUGx1Y2soYXJyLCBwcm9wKSB7XG4gIHZhciB0eXBlcyA9IHt9O1xuXG4gIGFyci5mb3JFYWNoKCAoZWxlbWVudCkgPT4ge3R5cGVzW2VsZW1lbnRbcHJvcF1dID0gdHJ1ZTt9ICk7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHR5cGVzKTtcbn07XG5cbmZ1bmN0aW9uIGdldE1ham9yQXJjYW5hKCkge1xuICByZXR1cm4gZ2V0QnlTdWl0KCdtYWpvcicpO1xufTtcblxuZnVuY3Rpb24gZ2V0TWlub3JBcmNhbmEoKSB7XG4gIHZhciBtaW5vclN1aXRzID0gZ2V0U3VpdHMoKS5maWx0ZXIoIChlbGVtZW50KSA9PiB7cmV0dXJuIGVsZW1lbnQgIT0gJ21ham9yJzt9ICk7XG5cbiAgcmV0dXJuIG1pbm9yU3VpdHMucmVkdWNlKCAoYWNjdW11bGF0b3IsIHN1aXQpID0+IHtcbiAgICByZXR1cm4gYWNjdW11bGF0b3IuY29uY2F0KGdldEJ5U3VpdChzdWl0KSk7XG4gIH0sIFtdKTtcblxufTtcblxuZnVuY3Rpb24gZ2V0U3VpdHMoKSB7XG4gIHJldHVybiB1bmlxdWVQbHVjayh0YXJvdERlY2ssICdzdWl0Jyk7XG59O1xuXG5leHBvcnQgY29uc3QgdGFyb3REZWNrID0gdGFyb3QudGFyb3RfaW50ZXJwcmV0YXRpb25zO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlTdWl0KHN1aXQpIHtcbiAgcmV0dXJuIHRhcm90RGVjay5maWx0ZXIoIChlbGVtZW50KSA9PiB7cmV0dXJuIGVsZW1lbnQuc3VpdCA9PT0gc3VpdDt9ICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlSYW5rKHJhbmspIHtcbiAgcmV0dXJuIHRhcm90RGVjay5maW5kKCAoZWxlbWVudCkgPT4ge3JldHVybiBlbGVtZW50LnJhbmsgPT0gcmFuazt9ICk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3VpdHMgPSBnZXRTdWl0cygpO1xuXG5leHBvcnQgY29uc3QgbWlub3JBcmNhbmEgPSBnZXRNaW5vckFyY2FuYSgpO1xuXG5leHBvcnQgY29uc3QgbWFqb3JBcmNhbmEgPSBnZXRNYWpvckFyY2FuYSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0NhcmQoZGVjayA9IHRhcm90RGVjayl7XG4gIGlmIChkZWNrLmxlbmd0aCA8PSAwKSByZXR1cm47XG4gIGxldCBjaG9zZW5DYXJkID0gZGVja1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWNrLmxlbmd0aCldO1xuICBjaG9zZW5DYXJkLnJldmVyc2VkID0gTWF0aC5yYW5kb20oKTwuNTtcbiAgcmV0dXJuIGNob3NlbkNhcmQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhd1JlYWRpbmcobnVtYmVyT2ZDYXJkcyA9IDMsIG9yaWdpbmFsRGVjayA9IHRhcm90RGVjayl7XG4gIGNvbnN0IGRlY2sgPSBvcmlnaW5hbERlY2suc2xpY2UoKTtcbiAgXG4gIHJldHVybiBhcnJheShNYXRoLm1pbihudW1iZXJPZkNhcmRzLCBkZWNrLmxlbmd0aCkpLm1hcCggKCkgPT4ge1xuICAgIGxldCBjYXJkID0gZHJhd0NhcmQoZGVjayk7XG4gICAgZGVjay5zcGxpY2UoZGVjay5pbmRleE9mKGNhcmQpLCAxKTtcbiAgICByZXR1cm4gY2FyZDtcbiAgfSk7XG59Il19