
var test={
	guess:'h',
	word:'html'
		};
var rorw1 = new RORW(test);

function RORW(test){
	this.guess = test.guess;
	this.word = test.word;
	this.evalguess = function(){
		for( var r=0;r<this.word.length;r++){}
		
	}//function
	}



module.exports = rorw1;
