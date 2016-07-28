var Display = require('./letter.js');



function RORW(test){
	this.wordArray= []
	this.guess = test.guess;
	this.word = test.word;
	this.matchy = false;
	this.win = false;

	//this.result = '';
	this.makeArray = function(){
		for( var w=0;w<this.word.length;w++){
			//create array of objects with appear set to false
			//by using the letter.js creating new instance of letter
			display = new Display(this.word[w]);
			//display.evalshow();

			this.wordArray.push(display);
			
		}
		
	}
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
							
			}else{console.log(this.guess +' did not equal '+this.wordArray[eg].let);
				
			}
			console.log('===================================');
			console.log(this.wordArray[eg]);
			//now indicate what letters should be printed
			display.evalshow(this.wordArray[eg].let, this.wordArray[eg].appear);
			//print out appropriate letters and spaces
			 console.log(display.show);
	
	}// end for loop
		
			
		
			
	}//function

	//this.didyouwin(){}

     	//code this to check if all of the display.appear fields are true
		//this.wordArray.every()
		
		//code this to check if all of the display.appear fields are true
		//if they are do win logic-- set this.win to true
		

}



//testlogic
//rorw1.makeArray();
//rorw1.evalguess();

module.exports = RORW;
