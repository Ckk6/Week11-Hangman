 

function List (options) {
	this.phrase = options.choices,
	this.choose = function(){
		i = Math.floor(Math.random() * ((this.phrase.length-1) - 0 + 1)) + 0;
							}
			}			
//list.choose();


module.exports = List;