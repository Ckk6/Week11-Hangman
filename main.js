var Select = require('./game.js');
var Match = require('./word.js');
var Display = require('./letter.js');
var inquirer = require('inquirer');
var options = {  
    choices:["css","javascript","html","node","npm","json","ajax","mysql","jquery"]
    };

var newWord = true
;	
var space = '';
//['a'] is test data
var prevguess = [
];


var repeat = false;
var currentguess='no guess yet';

function start(){
    var select = new Select(options);
    //console.log(select);

	//when game restarts number of guesses and previous guess array are reset   
	numguess = 9;
	prevguess = [];
    newWord = true
	console.log('============================');
	console.log('============================');
	console.log('Welcome to Hangman');
	console.log('You will have 9 guesses.  Choose wisely!');
	//Randomly choose a word		
	select.choose();
    //print out spaces to accomodate word
	spaces(select.phrase[i]);
	console.log('============================');
	console.log('============================');
	guesses(select.phrase[i]);

}
function spaces(word){
		//console.log(word);
		for(s = 0; s < word.length; s++){
			space += "_ ";
			
		}//for loop
		console.log(space);
	}//function

function guesses(currentword){
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
       	//check to see if this letter was guessed previously
    	for (pg=0;pg<prevguess.length && repeat==false;pg++){
    		    		
    		if (currentguess==prevguess[pg]){
    			console.log(prevguess[pg]+' is equal to '+ currentguess);
    			repeat = true;
    		}			
    	}

    	if (repeat===false){
           	prevguess.push(currentguess);
    		test = {guess: currentguess, word: currentword};
            //check if we need a new instance of match
            if (newWord == true){
                newWord = false;
                match =  new Match(test);
                console.log('i have created new instance of Match');
                //console.log(match)
                match.makeArray();
                console.log('i have made a new wordArray');
            }else{
                //keep current instance of match and wordArray
                //just update the guessfield with current guess
                match.guess = currrentguess;
            }    
            match.evalguess();
            guesses(select.phrase[i]);

    	}else{
    		console.log("You have guessed " + currentguess + " before.");
    			//and call for new guesses
    			guesses(select.phrase[i]);

    	}
    	
    	
    	

    });
}



start(); 