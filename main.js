var Select = require('./game.js');
var Match = require('./word.js');
var Display = require('./letter.js');
var inquirer = require('inquirer');
var options = {  
    choices:["css","javascript","html","node","npm","json","ajax","mysql","jquery"]
    };

var newWord = true;
//word is a global word to hold select.phrase[i]
var word=''
	
var space = '';
//['a'] is test data
var prevguess = [];


var repeat = false;
var currentguess='no guess yet';

function start(){
    var select = new Select(options);
    

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
    word = select.phrase[i];
    guesses(select.phrase[i]); 
	

}
function spaces(word){
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
                console.log('I have created new instance of Match');
                match.makeArray();
                console.log('i have made a new wordArray');
            }else{
                //keep current instance of match and wordArray
                //just update the guessfield with current guess
                match.guess = currentguess;
            }    
            match.evalguess();
            if (match.matchy == true){
                console.log('matchy is true');
                match.matchy = false;
                match.didyouwin();
            }else{ 
                numguess--;
                console.log('you have ', numguess, 'guesses left')
            }

        }else{
    		console.log("You have guessed " + currentguess + " before.");
    			//and call for new guesses
    			
    	}
        console.log('i am about to test if the game is over in guesses ');
        if (numguess === 0 || match.wordGuessed == true){
            console.log('game is over');
            endgame(word);
        } else{
            console.log('game is not over');
            console.log(word);
            guesses(word);
        }
      	
    })//end .then
}// end guesses function

function endgame(currentword){
    if(match.wordGuessed == true){
        console.log('**************************************');
        console.log('**************************************');
        console.log('CONGRATULATIONS!! YOU GUESSED IT!!');
        console.log('**************************************');
        console.log('**************************************');
    }else{
        console.log('**************************************');
        console.log('**************************************');
        console.log('Oh well!! You have used all of your guesses.');
        console.log('The word was ',word);
        console.log('**************************************');
        console.log('**************************************');
    }

    inquirer.prompt({
             name: "confirm",
             type: "confirm",
             message: "Would you like to play again?"
        }).then(function(answer) {
            //IF THE ANSWER IS YES, restart the game
             if (answer.confirm == true) {
                start();
            }else{
    
                console.log('Thank you for playing');
            }
        });    
}


start();
