 var options = {
	choices:["css","javascript","html","node","npm","json","ajax","mysql","jquery"],
	};

var list1 = new List(options);


function List (options) {
	this.phrase = options.choices,
	this.choose = function(){
		i = Math.floor(Math.random() * ((this.phrase.length-1) - 0 + 1)) + 0;
		console.log(i);
		console.log(this.phrase[i]);
						}
			}			
//list.choose();


module.exports = list1;