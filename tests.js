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

test('Draw a single card', function(t){
    t.plan(1);
    t.assert(tarot.tarotDeck.indexOf(tarot.drawCard(tarot.tarotDeck) ) != -1, "Able to draw random cards from the deck");
});

test('Drawing a tarot reading', function(t){
    t.plan(3);
    t.assert(tarot.drawReading().length === 3, "Readings default to 3 cards ");
    
    var fullReading = tarot.drawReading(tarot.tarotDeck.length);
    var uniqueReading = [ ...new Set(fullReading) ];
    t.assert(fullReading.length === uniqueReading.length , "All cards drawn in a reading are unique");
    t.assert(tarot.drawReading(tarot.tarotDeck.length + 1).length === tarot.tarotDeck.length, "Drawing more cards than are in a deck results in a return equal to deck size")
});