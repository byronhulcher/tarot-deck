# tarot-deck

Tarot for Node! A thin javascript wrapper for the Tarot Interpretations from github.com/dariusk/corpora

# installation
```
npm install tarot-deck
```

#usage
```
var tarot = require('tarot-deck');

console.log( tarot.suits );
// [ 'major', 'wands', 'cups', 'swords', 'coins' ]

console.log( tarot.minorArcana );
// 56

console.log( tarot.getByRank(1) );
/* 
{ keywords: [ 'capability', 'empowerment', 'activity' ],
  meanings: 
   { light: 
      [ 'Taking appropriate action',
        'Receiving guidance from a higher power',
        'Becoming a channel of divine will',
        'Expressing masculine energy in appropriate and constructive ways',
        'Being yourself in every way' ],
     shadow: 
      [ 'Inflating your own ego',
        'Abusing talents',
        'Manipulating or deceiving others',
        'Being too aggressive',
        'Using cheap illusions to dazzle others',
        'Refusing to invest the time and effort needed to master your craft',
        'Taking shortcuts' ] },
  name: 'The Magician',
  rank: 1,
  suit: 'major' }
*/
```

# exports
### tarotDeck
An array of objects representing tarot cards.  See above for an example of the fields these objects will contain.

### majorArcana
An array of objects representing only the Major Arcana tarot cards.  See above for an example of the fields these objects will contain.

### minorArcana
An array of objects representing only the Minor Arcana tarot cards.  See above for an example of the fields these objects will contain.

### suits
An array of the 5 suits of Tarot

### function getBySuit( string )
Function that returns an array of objects representing tarot cards which match the provided suit.  See above for an example of the fields these objects will contain.

### function getByRank( integer or string )
Function that returns a single object representing a tarot card which matches the provided rank.  The rank should be an integer or evaluate to an integer.  See above for an example of the fields this will contain.
