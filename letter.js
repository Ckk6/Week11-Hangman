function EachLetter(letter){
	this.let = letter;
	this.appear = false;
	this.show ='';
	this.evalshow = function(evallet, newAppear) {
		
		console.log('i am in evalshow');
		console.log('@@@@',evallet);
		if (newAppear == false){
			console.log('*****newAppear is false for ',evallet);
			this.show += '_ ';
		}else{
			this.show += evallet;
			console.log('=====newAppear is true for ',evallet);
		}


	}
}

module.exports = EachLetter;

