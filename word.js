var Display = require('./letter.js');


function RORW(test){
	this.wordArray= [];
	this.guess = test.guess;
	this.word = test.word;
	this.matchy = false;
	this.win = false;
	this.wordguessed = true;
	
	this.makeArray = function(){
		for( var w=0;w<this.word.length;w++){
			//create array of objects with appear set to false
			//by using the letter.js creating new instance of letter
			display = new Display(this.word[w]);
			//display.evalshow();
			this.wordArray.push(display);
		}
		
	}//end this.makearray

	this.evalguess = function(){
		console.log('I am in evalguess');

		for(var eg = 0;eg < this.wordArray.length;eg++){
			console.log(' eg: ',eg)
			console.log(this.wordArray[eg].let);
			console.log('===================================');
			if (this.guess === this.wordArray[eg].let){
				console.log('Girl you know its true');
				//adjust appear to true
				this.wordArray[eg].appear = true;
				//adjust matchy to true
				this.matchy = true;
							
			}
			console.log('===================================');
			console.log(this.wordArray[eg]);
			//now indicate what letters should be printed
			display.evalshow(this.wordArray[eg].let, this.wordArray[eg].appear);
			//print out appropriate letters and spaces
			
		}// end for loop
		console.log('#########################################');
		console.log(display.show);
		console.log('#########################################');
		display.show = '';
		//console.log('i am ending evalguess');
		
	}//end this.evalguess

	this.didyouwin = function(){
		console.log('I am in didyouwin')
		for(var win = 0;win<this.wordArray.length;win++){
			console.log('this.wordArray[win].appear ',this.wordArray[win].appear);
			if (this.wordArray[win].appear == false){
				this.wordGuessed = false;
				console.log('wordGuessed',this.wordGuessed);
				
			}
		}
		return this.wordGuessed;
   	}
}//function


module.exports = RORW;