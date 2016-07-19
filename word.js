var rorw = {
	space: '',
	spaces : function(word){
		console.log(word);
		for(s = 0; s < word.length; s++){
			this.space += "_ ";
			
		}//for loop
		console.log(this.space);
	}//function

}//object

module.exports = rorw;
