var tarot = require('corpora/data/divination/tarot_interpretations.json');
var tarotDeck = tarot.tarot_interpretations;

var uniquePluck = function(arr, prop) {
    var types = {};
    arr.forEach(function(element) {
        types[element[prop]] = true;
    });

    return Object.keys(types);
};

var getMajorArcana = function(){
    return getBySuit("major");
}

var getMinorArcana = function(){
    var minorSuits = getSuits().filter(function(element){return element != "major"});
    return minorSuits.reduce(function(accumulator, suit){
        return accumulator.concat(getBySuit(suit));
    }, []);

}

var getSuits = function(){
    return uniquePluck(tarotDeck, 'suit');
}

var getBySuit = function(suit){
    return tarotDeck.filter(function(element){return element.suit === suit});
}

var getByRank = function(rank){
    return tarotDeck.find(function(element){return element.rank == rank});
}

module.exports = {
    tarotDeck: tarotDeck,
    suits: getSuits(),
    getBySuit: getBySuit,
    minorArcana: getMinorArcana(),
    majorArcana: getMajorArcana(),
    getByRank: getByRank, 
};
