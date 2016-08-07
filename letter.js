function EachLetter(letter){
	this.let = letter;
	this.appear = false;
	this.show ='';
	this.evalshow = function(evallet, newAppear) {

		
		
		if (newAppear == false){
			
			this.show += '_ ';
		}else{
			this.show += evallet;
			
		}


	}
}

module.exports = EachLetter;

