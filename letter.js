function EachLetter(letter){
	this.let = letter;
	this.appear = false;
	this.show ='';
	this.evalshow = function() {
		if (this.appear === false){
			this.show = '- ';
		}else{
			this.show = this.let + ' ';
		}


	}
}

module.exports = EachLetter;

