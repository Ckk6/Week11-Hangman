var select = require('./game.js');
var match = require('./word.js');
var display = require('./letter.js');
var inquirer = require('inquirer');

	
var space = '';
var prevguess = ['a'];
var numguess = 9;
var repeat = false;
var currentguess='no guess yet';

function start(){
	console.log('============================');
	console.log('Welcome to Hangman');
	console.log('You will have 9 guesses.  Choose wisely!');
			
	select.choose();
	spaces(select.phrase[i]);
	guesses();

}
function spaces(word){
		//console.log(word);
		for(s = 0; s < word.length; s++){
			space += "_ ";
			
		}//for loop
		console.log(space);
	}//function

function guesses(){
	inquirer.prompt({
        name: "guess",
        type: "input",
        message: "Please select a letter.",
        
    }).then(function(answer) {
    	console.log(answer.guess);
    	currentguess = answer.guess;
    	//reset repeat
    	repeat = false;
    	console.log(currentguess);
    	//currentguess = currentguess.tolowercase();
       	console.log("Your guess is " + currentguess);
       	console.log('the contents of prevguess is '+prevguess);
    	//check to see if this letter was guessed previously
    	for (pg=0;pg<prevguess.length && repeat==false;pg++){
    		console.log(pg);
    		console.log(prevguess[pg]);
    		
    		if (currentguess==prevguess[pg]){
    			console.log(prevguess[pg]+' is equal to '+ currentguess);
    			repeat = true;
    		}			
    	}

    	if (repeat===false){
    		numguess--;  
    		prevguess.push(currentguess);
    		//call for match logic
    		console.log('now would be the time for match logic');

    	}else{
    		console.log("You have guessed " + currentguess + " before.");
    			//and call for new guesses
    			guesses();

    	}
    	
    	
    	

    });
}



start(); 