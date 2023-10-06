
var REPETICOES = 300
var DELAY = 100

async function spamMenti(){
	console.log('****  iniciou  ******');
	//debugger;
	for (ind = 0; ind < REPETICOES; ind++) {	
		x = document;
		butLen = x.getElementsByTagName('button').length
		for (i = 0; i < butLen; i++){
			str = x.getElementsByTagName('button')[i].ariaLabel
			if (
					str == "Send heart1 reaction to the presenter!"
			  	|| 	str == "Send thumbsup reaction to the presenter!"
			//	|| 	str == "Send thumbsdown reaction to the presenter!"
			  	|| 	str == "Send cat reaction to the presenter!"
			  	||  str == "Send question reaction to the presenter!"
				){
				x.getElementsByTagName('button')[i].click()
			}	
		}	

	  delay(DELAY);
	  console.log('Executando!');
	}
	function delay(ms) {
		var cur_d = new Date();
		var cur_ticks = cur_d.getTime();
		var ms_passed = 0;
		while(ms_passed < ms) {
			var d = new Date();  // Possible memory leak?
			var ticks = d.getTime();
			ms_passed = ticks - cur_ticks;
			// d = null;  // Prevent memory leak?
		}
	}
	console.log('****  fim  ******')
}
spamMenti()
//copyright Vitor Vicente