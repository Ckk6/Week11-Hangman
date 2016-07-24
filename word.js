var Display = require('./letter.js');

test = {
	guess:'b',
	word:'html'
}
var rorw1 = new RORW(test)
function RORW(guess){
	this.wordArray= []
	this.guess = test.guess;
	this.word = test.word;

	//this.result = '';
	this.makeArray = function(){
		for( var w=0;w<this.word.length;w++){
			//create array of objects with appear set to false
			//by using the letter.js creating new instance of letter
			display = new Display(this.word[w]);
			//display.evalshow();

			this.wordArray.push(display);
			
		}
		console.log(this.wordArray)
	}
	this.evalguess = function(){
		for(var eg=0;eg<this.wordArray.length;eg++){
			if (this.guess === this.wordArray.let[eg]){
				//adjust appear to true
				this.wordArray.appear[eg] = true;
				
			}
		
			
		}
			
	}//function
}


//testlogic
rorw1.makeArray();
//rorw1.evalguess();

module.exports = RORW;
