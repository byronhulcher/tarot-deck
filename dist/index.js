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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7UUFzQmdCO1FBSUE7UUFVQTtRQVFBOzs7O0FBNUNoQixJQUFNLFFBQVEsUUFBUSxvREFBUixDQUFSO0lBQ0osVUFBVSxRQUFRLGVBQVIsRUFBeUIsWUFBekI7O0FBRVosU0FBUyxjQUFULEdBQTBCO0FBQ3hCLFNBQU8sVUFBVSxPQUFWLENBQVAsQ0FEd0I7Q0FBMUI7O0FBSUEsU0FBUyxjQUFULEdBQTBCO0FBQ3hCLE1BQUksYUFBYSxXQUFXLE1BQVgsQ0FBbUIsVUFBQyxPQUFELEVBQWE7QUFBQyxXQUFPLFdBQVcsT0FBWCxDQUFSO0dBQWIsQ0FBaEMsQ0FEb0I7O0FBR3hCLFNBQU8sV0FBVyxNQUFYLENBQW1CLFVBQUMsV0FBRCxFQUFjLElBQWQsRUFBdUI7QUFDL0MsV0FBTyxZQUFZLE1BQVosQ0FBbUIsVUFBVSxJQUFWLENBQW5CLENBQVAsQ0FEK0M7R0FBdkIsRUFFdkIsRUFGSSxDQUFQLENBSHdCO0NBQTFCOztBQVNBLFNBQVMsUUFBVCxHQUFvQjtBQUNsQixvREFBVyxrQkFBUSxVQUFVLEdBQVYsQ0FBZSxVQUFDLEtBQUQ7V0FBVyxNQUFNLElBQU47R0FBWCxDQUF2QixHQUFYLENBRGtCO0NBQXBCOztBQUlPLElBQU0sZ0NBQVksTUFBTSxxQkFBTjs7QUFFbEIsU0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCO0FBQzlCLFNBQU8sVUFBVSxNQUFWLENBQWtCLFVBQUMsT0FBRCxFQUFhO0FBQUMsV0FBTyxRQUFRLElBQVIsS0FBaUIsSUFBakIsQ0FBUjtHQUFiLENBQXpCLENBRDhCO0NBQXpCOztBQUlBLFNBQVMsU0FBVCxDQUFtQixJQUFuQixFQUF5QjtBQUM5QixTQUFPLFVBQVUsSUFBVixDQUFnQixVQUFDLE9BQUQsRUFBYTtBQUFDLFdBQU8sUUFBUSxJQUFSLElBQWdCLElBQWhCLENBQVI7R0FBYixDQUF2QixDQUQ4QjtDQUF6Qjs7QUFJQSxJQUFNLHdCQUFRLFVBQVI7O0FBRU4sSUFBTSxvQ0FBYyxnQkFBZDs7QUFFTixJQUFNLG9DQUFjLGdCQUFkOztBQUVOLFNBQVMsUUFBVCxHQUFvQztNQUFsQiw2REFBTyx5QkFBVzs7QUFDekMsTUFBSSxLQUFLLE1BQUwsSUFBZSxDQUFmLEVBQWtCLE9BQXRCO0FBQ0EsTUFBSSxhQUFhLEtBQUssS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLEtBQUssTUFBTCxDQUFoQyxDQUFiLENBRnFDOztBQUl6QyxhQUFXLFFBQVgsR0FBc0IsS0FBSyxNQUFMLEtBQWdCLEdBQWhCLENBSm1CO0FBS3pDLFNBQU8sVUFBUCxDQUx5QztDQUFwQzs7QUFRQSxTQUFTLFdBQVQsR0FBa0U7TUFBN0Msc0VBQWdCLGlCQUE2QjtNQUExQixxRUFBZSx5QkFBVzs7QUFDdkUsU0FBTyxRQUFRLGFBQWEsS0FBYixDQUFtQixDQUFuQixFQUFzQixLQUF0QixDQUE0QixDQUE1QixFQUE4QixhQUE5QixDQUFSLENBQVAsQ0FEdUU7Q0FBbEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXJvdCA9IHJlcXVpcmUoJ2NvcnBvcmEvZGF0YS9kaXZpbmF0aW9uL3Rhcm90X2ludGVycHJldGF0aW9ucy5qc29uJyksXHJcbiAgc2h1ZmZsZSA9IHJlcXVpcmUoJ2tudXRoLXNodWZmbGUnKS5rbnV0aFNodWZmbGU7XHJcblxyXG5mdW5jdGlvbiBnZXRNYWpvckFyY2FuYSgpIHtcclxuICByZXR1cm4gZ2V0QnlTdWl0KCdtYWpvcicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0TWlub3JBcmNhbmEoKSB7XHJcbiAgdmFyIG1pbm9yU3VpdHMgPSBnZXRTdWl0cygpLmZpbHRlciggKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudCAhPSAnbWFqb3InO30gKTtcclxuXHJcbiAgcmV0dXJuIG1pbm9yU3VpdHMucmVkdWNlKCAoYWNjdW11bGF0b3IsIHN1aXQpID0+IHtcclxuICAgIHJldHVybiBhY2N1bXVsYXRvci5jb25jYXQoZ2V0QnlTdWl0KHN1aXQpKTtcclxuICB9LCBbXSk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0U3VpdHMoKSB7XHJcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KHRhcm90RGVjay5tYXAoICh2YWx1ZSkgPT4gdmFsdWUuc3VpdCApKV07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdGFyb3REZWNrID0gdGFyb3QudGFyb3RfaW50ZXJwcmV0YXRpb25zO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5U3VpdChzdWl0KSB7XHJcbiAgcmV0dXJuIHRhcm90RGVjay5maWx0ZXIoIChlbGVtZW50KSA9PiB7cmV0dXJuIGVsZW1lbnQuc3VpdCA9PT0gc3VpdDt9ICk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlSYW5rKHJhbmspIHtcclxuICByZXR1cm4gdGFyb3REZWNrLmZpbmQoIChlbGVtZW50KSA9PiB7cmV0dXJuIGVsZW1lbnQucmFuayA9PSByYW5rO30gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWl0cyA9IGdldFN1aXRzKCk7XHJcblxyXG5leHBvcnQgY29uc3QgbWlub3JBcmNhbmEgPSBnZXRNaW5vckFyY2FuYSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ham9yQXJjYW5hID0gZ2V0TWFqb3JBcmNhbmEoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FyZChkZWNrID0gdGFyb3REZWNrKSB7XHJcbiAgaWYgKGRlY2subGVuZ3RoIDw9IDApIHJldHVybjtcclxuICBsZXQgY2hvc2VuQ2FyZCA9IGRlY2tbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVjay5sZW5ndGgpXTtcclxuXHJcbiAgY2hvc2VuQ2FyZC5yZXZlcnNlZCA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XHJcbiAgcmV0dXJuIGNob3NlbkNhcmQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd1JlYWRpbmcobnVtYmVyT2ZDYXJkcyA9IDMsIG9yaWdpbmFsRGVjayA9IHRhcm90RGVjaykge1xyXG4gIHJldHVybiBzaHVmZmxlKG9yaWdpbmFsRGVjay5zbGljZSgwKS5zbGljZSgwLG51bWJlck9mQ2FyZHMpKTtcclxufSJdfQ==