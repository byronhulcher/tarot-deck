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
    shuffle = require('knuth-shuffle').knuthShuffle;

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

  chosenCard.reversed = Math.random() < 0.5;
  return chosenCard;
};

function drawReading() {
  var numberOfCards = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];
  var originalDeck = arguments.length <= 1 || arguments[1] === undefined ? tarotDeck : arguments[1];

  return shuffle(originalDeck.slice(0).slice(0, numberOfCards));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7UUE4QmdCO1FBSUE7UUFVQTtRQVFBOzs7O0FBcERoQixJQUFNLFFBQVEsUUFBUSxvREFBUixDQUFSO0lBQ0osVUFBVSxRQUFRLGVBQVIsRUFBeUIsWUFBekI7O0FBRVosU0FBUyxXQUFULENBQXFCLEdBQXJCLEVBQTBCLElBQTFCLEVBQWdDO0FBQzlCLE1BQUksUUFBUSxFQUFSLENBRDBCOztBQUc5QixNQUFJLE9BQUosQ0FBYSxVQUFDLE9BQUQsRUFBYTtBQUFDLFVBQU0sUUFBUSxJQUFSLENBQU4sSUFBdUIsSUFBdkIsQ0FBRDtHQUFiLENBQWIsQ0FIOEI7O0FBSzlCLFNBQU8sb0JBQVksS0FBWixDQUFQLENBTDhCO0NBQWhDOztBQVFBLFNBQVMsY0FBVCxHQUEwQjtBQUN4QixTQUFPLFVBQVUsT0FBVixDQUFQLENBRHdCO0NBQTFCOztBQUlBLFNBQVMsY0FBVCxHQUEwQjtBQUN4QixNQUFJLGFBQWEsV0FBVyxNQUFYLENBQW1CLFVBQUMsT0FBRCxFQUFhO0FBQUMsV0FBTyxXQUFXLE9BQVgsQ0FBUjtHQUFiLENBQWhDLENBRG9COztBQUd4QixTQUFPLFdBQVcsTUFBWCxDQUFtQixVQUFDLFdBQUQsRUFBYyxJQUFkLEVBQXVCO0FBQy9DLFdBQU8sWUFBWSxNQUFaLENBQW1CLFVBQVUsSUFBVixDQUFuQixDQUFQLENBRCtDO0dBQXZCLEVBRXZCLEVBRkksQ0FBUCxDQUh3QjtDQUExQjs7QUFTQSxTQUFTLFFBQVQsR0FBb0I7QUFDbEIsU0FBTyxZQUFZLFNBQVosRUFBdUIsTUFBdkIsQ0FBUCxDQURrQjtDQUFwQjs7QUFJTyxJQUFNLGdDQUFZLE1BQU0scUJBQU47O0FBRWxCLFNBQVMsU0FBVCxDQUFtQixJQUFuQixFQUF5QjtBQUM5QixTQUFPLFVBQVUsTUFBVixDQUFrQixVQUFDLE9BQUQsRUFBYTtBQUFDLFdBQU8sUUFBUSxJQUFSLEtBQWlCLElBQWpCLENBQVI7R0FBYixDQUF6QixDQUQ4QjtDQUF6Qjs7QUFJQSxTQUFTLFNBQVQsQ0FBbUIsSUFBbkIsRUFBeUI7QUFDOUIsU0FBTyxVQUFVLElBQVYsQ0FBZ0IsVUFBQyxPQUFELEVBQWE7QUFBQyxXQUFPLFFBQVEsSUFBUixJQUFnQixJQUFoQixDQUFSO0dBQWIsQ0FBdkIsQ0FEOEI7Q0FBekI7O0FBSUEsSUFBTSx3QkFBUSxVQUFSOztBQUVOLElBQU0sb0NBQWMsZ0JBQWQ7O0FBRU4sSUFBTSxvQ0FBYyxnQkFBZDs7QUFFTixTQUFTLFFBQVQsR0FBb0M7TUFBbEIsNkRBQU8seUJBQVc7O0FBQ3pDLE1BQUksS0FBSyxNQUFMLElBQWUsQ0FBZixFQUFrQixPQUF0QjtBQUNBLE1BQUksYUFBYSxLQUFLLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixLQUFLLE1BQUwsQ0FBaEMsQ0FBYixDQUZxQzs7QUFJekMsYUFBVyxRQUFYLEdBQXNCLEtBQUssTUFBTCxLQUFnQixHQUFoQixDQUptQjtBQUt6QyxTQUFPLFVBQVAsQ0FMeUM7Q0FBcEM7O0FBUUEsU0FBUyxXQUFULEdBQWtFO01BQTdDLHNFQUFnQixpQkFBNkI7TUFBMUIscUVBQWUseUJBQVc7O0FBQ3ZFLFNBQU8sUUFBUSxhQUFhLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsS0FBdEIsQ0FBNEIsQ0FBNUIsRUFBOEIsYUFBOUIsQ0FBUixDQUFQLENBRHVFO0NBQWxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFyb3QgPSByZXF1aXJlKCdjb3Jwb3JhL2RhdGEvZGl2aW5hdGlvbi90YXJvdF9pbnRlcnByZXRhdGlvbnMuanNvbicpLFxyXG4gIHNodWZmbGUgPSByZXF1aXJlKCdrbnV0aC1zaHVmZmxlJykua251dGhTaHVmZmxlO1xyXG5cclxuZnVuY3Rpb24gdW5pcXVlUGx1Y2soYXJyLCBwcm9wKSB7XHJcbiAgdmFyIHR5cGVzID0ge307XHJcblxyXG4gIGFyci5mb3JFYWNoKCAoZWxlbWVudCkgPT4ge3R5cGVzW2VsZW1lbnRbcHJvcF1dID0gdHJ1ZTt9ICk7XHJcblxyXG4gIHJldHVybiBPYmplY3Qua2V5cyh0eXBlcyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRNYWpvckFyY2FuYSgpIHtcclxuICByZXR1cm4gZ2V0QnlTdWl0KCdtYWpvcicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0TWlub3JBcmNhbmEoKSB7XHJcbiAgdmFyIG1pbm9yU3VpdHMgPSBnZXRTdWl0cygpLmZpbHRlciggKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudCAhPSAnbWFqb3InO30gKTtcclxuXHJcbiAgcmV0dXJuIG1pbm9yU3VpdHMucmVkdWNlKCAoYWNjdW11bGF0b3IsIHN1aXQpID0+IHtcclxuICAgIHJldHVybiBhY2N1bXVsYXRvci5jb25jYXQoZ2V0QnlTdWl0KHN1aXQpKTtcclxuICB9LCBbXSk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0U3VpdHMoKSB7XHJcbiAgcmV0dXJuIHVuaXF1ZVBsdWNrKHRhcm90RGVjaywgJ3N1aXQnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0YXJvdERlY2sgPSB0YXJvdC50YXJvdF9pbnRlcnByZXRhdGlvbnM7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlTdWl0KHN1aXQpIHtcclxuICByZXR1cm4gdGFyb3REZWNrLmZpbHRlciggKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudC5zdWl0ID09PSBzdWl0O30gKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCeVJhbmsocmFuaykge1xyXG4gIHJldHVybiB0YXJvdERlY2suZmluZCggKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudC5yYW5rID09IHJhbms7fSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1aXRzID0gZ2V0U3VpdHMoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBtaW5vckFyY2FuYSA9IGdldE1pbm9yQXJjYW5hKCk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFqb3JBcmNhbmEgPSBnZXRNYWpvckFyY2FuYSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDYXJkKGRlY2sgPSB0YXJvdERlY2spIHtcclxuICBpZiAoZGVjay5sZW5ndGggPD0gMCkgcmV0dXJuO1xyXG4gIGxldCBjaG9zZW5DYXJkID0gZGVja1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWNrLmxlbmd0aCldO1xyXG5cclxuICBjaG9zZW5DYXJkLnJldmVyc2VkID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcclxuICByZXR1cm4gY2hvc2VuQ2FyZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3UmVhZGluZyhudW1iZXJPZkNhcmRzID0gMywgb3JpZ2luYWxEZWNrID0gdGFyb3REZWNrKSB7XHJcbiAgcmV0dXJuIHNodWZmbGUob3JpZ2luYWxEZWNrLnNsaWNlKDApLnNsaWNlKDAsbnVtYmVyT2ZDYXJkcykpO1xyXG59Il19