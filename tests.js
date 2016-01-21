var test = require('tape');

var tarot = require('../tarot-deck');

test('Tarot Deck', function(t){
    t.plan(2);
    t.ok(tarot.tarotDeck, "tarot deck exists");
    t.equal(tarot.tarotDeck.length, 78, "tarot deck has 78 cards");
});