var list = {
	phrase : ["one","two","three","four","five","six"],
	choose: function(){
		var i = Math.floor(Math.random() * ((list.phrase.length-1) - 0 + 1)) + 0;
		console.log(i);
		console.log(list.phrase[i]);
						}
			}			
//list.choose();


module.exports = list;