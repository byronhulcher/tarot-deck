var test = require('tape');

var tarot = require('../tarot-deck');

test('Tarot Deck', function(t){
    t.plan(2);
    t.ok(tarot.tarotDeck, "tarot deck exists");
    t.equal(tarot.tarotDeck.length, 78, "tarot deck has 78 cards");
});

test('Major Arcana', function(t){
    t.plan(2);
    t.ok(tarot.majorArcana, "Major Arcana available");
    t.equal(tarot.majorArcana.length, 22, "Major Arcana has 22 cards");
});

test('Minor Arcana', function(t){
    t.plan(2);
    t.ok(tarot.minorArcana, "Minor Arcana available");
    t.equal(tarot.minorArcana.length, 56, "Minor Arcana has 56 cards");
});

test('Suits', function(t){
    t.plan(6);
    t.equal(tarot.suits.length, 5, "There exist 5 suits");
    [ 'major', 'wands', 'cups', 'swords', 'coins' ].forEach(function(suit){
        t.assert(tarot.suits.indexOf(suit) != -1, "The `" + suit + "` suit is available");
    });
});