'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.majorArcana = exports.minorArcana = exports.suits = exports.tarotDeck = undefined;

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.getBySuit = getBySuit;
exports.getByRank = getByRank;
exports.drawCard = drawCard;
exports.drawReading = drawReading;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tarot = require('corpora/data/divination/tarot_interpretations.json'),
    shuffle = require('knuth-shuffle').knuthShuffle;

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
  return [].concat((0, _toConsumableArray3.default)(new _set2.default(tarotDeck.map(function (value) {
    return value.suit;
  }))));
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
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$reversedChance = _ref.reversedChance,
      reversedChance = _ref$reversedChance === undefined ? 0.5 : _ref$reversedChance,
      _ref$deck = _ref.deck,
      deck = _ref$deck === undefined ? tarotDeck : _ref$deck;

  var chosenCard = void 0;

  if (deck.length <= 0) return;
  chosenCard = deck[Math.floor(Math.random() * deck.length)];
  chosenCard.reversed = Math.random() < reversedChance;
  return chosenCard;
};

function drawReading() {
  var numberOfCards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$reversedChance = _ref2.reversedChance,
      reversedChance = _ref2$reversedChance === undefined ? 0.5 : _ref2$reversedChance,
      _ref2$deck = _ref2.deck,
      deck = _ref2$deck === undefined ? tarotDeck : _ref2$deck;

  var reading = shuffle(deck.slice(0).slice(0, numberOfCards));

  return reading.map(function (card) {
    card.reversed = Math.random() < reversedChance;
    return card;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRCeVN1aXQiLCJnZXRCeVJhbmsiLCJkcmF3Q2FyZCIsImRyYXdSZWFkaW5nIiwidGFyb3QiLCJyZXF1aXJlIiwic2h1ZmZsZSIsImtudXRoU2h1ZmZsZSIsImdldE1ham9yQXJjYW5hIiwiZ2V0TWlub3JBcmNhbmEiLCJtaW5vclN1aXRzIiwiZ2V0U3VpdHMiLCJmaWx0ZXIiLCJlbGVtZW50IiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJzdWl0IiwiY29uY2F0IiwidGFyb3REZWNrIiwibWFwIiwidmFsdWUiLCJ0YXJvdF9pbnRlcnByZXRhdGlvbnMiLCJyYW5rIiwiZmluZCIsInN1aXRzIiwibWlub3JBcmNhbmEiLCJtYWpvckFyY2FuYSIsInJldmVyc2VkQ2hhbmNlIiwiZGVjayIsImNob3NlbkNhcmQiLCJsZW5ndGgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyZXZlcnNlZCIsIm51bWJlck9mQ2FyZHMiLCJyZWFkaW5nIiwic2xpY2UiLCJjYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7UUFzQmdCQSxTLEdBQUFBLFM7UUFJQUMsUyxHQUFBQSxTO1FBVUFDLFEsR0FBQUEsUTtRQVNBQyxXLEdBQUFBLFc7Ozs7QUE3Q2hCLElBQU1DLFFBQVFDLFFBQVEsb0RBQVIsQ0FBZDtBQUFBLElBQ0VDLFVBQVVELFFBQVEsZUFBUixFQUF5QkUsWUFEckM7O0FBR0EsU0FBU0MsY0FBVCxHQUEwQjtBQUN4QixTQUFPUixVQUFVLE9BQVYsQ0FBUDtBQUNEOztBQUVELFNBQVNTLGNBQVQsR0FBMEI7QUFDeEIsTUFBSUMsYUFBYUMsV0FBV0MsTUFBWCxDQUFtQixVQUFDQyxPQUFELEVBQWE7QUFBQyxXQUFPQSxXQUFXLE9BQWxCO0FBQTJCLEdBQTVELENBQWpCOztBQUVBLFNBQU9ILFdBQVdJLE1BQVgsQ0FBbUIsVUFBQ0MsV0FBRCxFQUFjQyxJQUFkLEVBQXVCO0FBQy9DLFdBQU9ELFlBQVlFLE1BQVosQ0FBbUJqQixVQUFVZ0IsSUFBVixDQUFuQixDQUFQO0FBQ0QsR0FGTSxFQUVKLEVBRkksQ0FBUDtBQUlEOztBQUVELFNBQVNMLFFBQVQsR0FBb0I7QUFDbEIsb0RBQVcsa0JBQVFPLFVBQVVDLEdBQVYsQ0FBZSxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsTUFBTUosSUFBakI7QUFBQSxHQUFmLENBQVIsQ0FBWDtBQUNEOztBQUVNLElBQU1FLGdDQUFZZCxNQUFNaUIscUJBQXhCOztBQUVBLFNBQVNyQixTQUFULENBQW1CZ0IsSUFBbkIsRUFBeUI7QUFDOUIsU0FBT0UsVUFBVU4sTUFBVixDQUFrQixVQUFDQyxPQUFELEVBQWE7QUFBQyxXQUFPQSxRQUFRRyxJQUFSLEtBQWlCQSxJQUF4QjtBQUE4QixHQUE5RCxDQUFQO0FBQ0Q7O0FBRU0sU0FBU2YsU0FBVCxDQUFtQnFCLElBQW5CLEVBQXlCO0FBQzlCLFNBQU9KLFVBQVVLLElBQVYsQ0FBZ0IsVUFBQ1YsT0FBRCxFQUFhO0FBQUMsV0FBT0EsUUFBUVMsSUFBUixJQUFnQkEsSUFBdkI7QUFBNkIsR0FBM0QsQ0FBUDtBQUNEOztBQUVNLElBQU1FLHdCQUFRYixVQUFkOztBQUVBLElBQU1jLG9DQUFjaEIsZ0JBQXBCOztBQUVBLElBQU1pQixvQ0FBY2xCLGdCQUFwQjs7QUFFQSxTQUFTTixRQUFULEdBQWlFO0FBQUEsaUZBQUosRUFBSTtBQUFBLGlDQUE5Q3lCLGNBQThDO0FBQUEsTUFBOUNBLGNBQThDLHVDQUE3QixHQUE2QjtBQUFBLHVCQUF4QkMsSUFBd0I7QUFBQSxNQUF4QkEsSUFBd0IsNkJBQWpCVixTQUFpQjs7QUFDdEUsTUFBSVcsbUJBQUo7O0FBRUEsTUFBSUQsS0FBS0UsTUFBTCxJQUFlLENBQW5CLEVBQXNCO0FBQ3RCRCxlQUFhRCxLQUFLRyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0JMLEtBQUtFLE1BQWhDLENBQUwsQ0FBYjtBQUNBRCxhQUFXSyxRQUFYLEdBQXNCSCxLQUFLRSxNQUFMLEtBQWdCTixjQUF0QztBQUNBLFNBQU9FLFVBQVA7QUFDRDs7QUFFTSxTQUFTMUIsV0FBVCxHQUF1RjtBQUFBLE1BQWxFZ0MsYUFBa0UsdUVBQWxELENBQWtEOztBQUFBLGtGQUFKLEVBQUk7QUFBQSxtQ0FBOUNSLGNBQThDO0FBQUEsTUFBOUNBLGNBQThDLHdDQUE3QixHQUE2QjtBQUFBLHlCQUF4QkMsSUFBd0I7QUFBQSxNQUF4QkEsSUFBd0IsOEJBQWpCVixTQUFpQjs7QUFDNUYsTUFBSWtCLFVBQVU5QixRQUFRc0IsS0FBS1MsS0FBTCxDQUFXLENBQVgsRUFBY0EsS0FBZCxDQUFvQixDQUFwQixFQUFzQkYsYUFBdEIsQ0FBUixDQUFkOztBQUVBLFNBQU9DLFFBQVFqQixHQUFSLENBQWEsVUFBVW1CLElBQVYsRUFBZ0I7QUFDbENBLFNBQUtKLFFBQUwsR0FBZ0JILEtBQUtFLE1BQUwsS0FBZ0JOLGNBQWhDO0FBQ0EsV0FBT1csSUFBUDtBQUNELEdBSE0sQ0FBUDtBQUlEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFyb3QgPSByZXF1aXJlKCdjb3Jwb3JhL2RhdGEvZGl2aW5hdGlvbi90YXJvdF9pbnRlcnByZXRhdGlvbnMuanNvbicpLFxuICBzaHVmZmxlID0gcmVxdWlyZSgna251dGgtc2h1ZmZsZScpLmtudXRoU2h1ZmZsZTtcblxuZnVuY3Rpb24gZ2V0TWFqb3JBcmNhbmEoKSB7XG4gIHJldHVybiBnZXRCeVN1aXQoJ21ham9yJyk7XG59O1xuXG5mdW5jdGlvbiBnZXRNaW5vckFyY2FuYSgpIHtcbiAgdmFyIG1pbm9yU3VpdHMgPSBnZXRTdWl0cygpLmZpbHRlciggKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudCAhPSAnbWFqb3InO30gKTtcblxuICByZXR1cm4gbWlub3JTdWl0cy5yZWR1Y2UoIChhY2N1bXVsYXRvciwgc3VpdCkgPT4ge1xuICAgIHJldHVybiBhY2N1bXVsYXRvci5jb25jYXQoZ2V0QnlTdWl0KHN1aXQpKTtcbiAgfSwgW10pO1xuXG59O1xuXG5mdW5jdGlvbiBnZXRTdWl0cygpIHtcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KHRhcm90RGVjay5tYXAoICh2YWx1ZSkgPT4gdmFsdWUuc3VpdCApKV07XG59O1xuXG5leHBvcnQgY29uc3QgdGFyb3REZWNrID0gdGFyb3QudGFyb3RfaW50ZXJwcmV0YXRpb25zO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlTdWl0KHN1aXQpIHtcbiAgcmV0dXJuIHRhcm90RGVjay5maWx0ZXIoIChlbGVtZW50KSA9PiB7cmV0dXJuIGVsZW1lbnQuc3VpdCA9PT0gc3VpdDt9ICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlSYW5rKHJhbmspIHtcbiAgcmV0dXJuIHRhcm90RGVjay5maW5kKCAoZWxlbWVudCkgPT4ge3JldHVybiBlbGVtZW50LnJhbmsgPT0gcmFuazt9ICk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3VpdHMgPSBnZXRTdWl0cygpO1xuXG5leHBvcnQgY29uc3QgbWlub3JBcmNhbmEgPSBnZXRNaW5vckFyY2FuYSgpO1xuXG5leHBvcnQgY29uc3QgbWFqb3JBcmNhbmEgPSBnZXRNYWpvckFyY2FuYSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0NhcmQoe3JldmVyc2VkQ2hhbmNlID0gMC41LCBkZWNrID0gdGFyb3REZWNrfSA9IHt9KSB7XG4gIGxldCBjaG9zZW5DYXJkO1xuXG4gIGlmIChkZWNrLmxlbmd0aCA8PSAwKSByZXR1cm47XG4gIGNob3NlbkNhcmQgPSBkZWNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRlY2subGVuZ3RoKV07XG4gIGNob3NlbkNhcmQucmV2ZXJzZWQgPSBNYXRoLnJhbmRvbSgpIDwgcmV2ZXJzZWRDaGFuY2U7XG4gIHJldHVybiBjaG9zZW5DYXJkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdSZWFkaW5nKG51bWJlck9mQ2FyZHMgPSAzLCB7cmV2ZXJzZWRDaGFuY2UgPSAwLjUsIGRlY2sgPSB0YXJvdERlY2t9ID0ge30pIHtcbiAgbGV0IHJlYWRpbmcgPSBzaHVmZmxlKGRlY2suc2xpY2UoMCkuc2xpY2UoMCxudW1iZXJPZkNhcmRzKSk7XG5cbiAgcmV0dXJuIHJlYWRpbmcubWFwKCBmdW5jdGlvbiAoY2FyZCkge1xuICAgIGNhcmQucmV2ZXJzZWQgPSBNYXRoLnJhbmRvbSgpIDwgcmV2ZXJzZWRDaGFuY2U7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH0pO1xufSJdfQ==