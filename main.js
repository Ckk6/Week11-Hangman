var select = require('./game.js');
var match = require('./word.js');
var display = require('./letter.js');

console.log('============================');
console.log('Welcome to Hangman');
console.log('You will have 9 guesses.  Choose wisely!');


//console.log(select);
console.log(match);
select.choose();
match.spaces(select.phrase[i]);