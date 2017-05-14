function bolo(bandayKaNaam){
	var newHello = function(username){
		return username + ' ' + bandayKaNaam
	};

	var anotherPerson = function(name){
		return bandayKaNaam + ' dosra function ' + name;
	}

	return {
		firstFunc: newHello,
		secondFunc: anotherPerson
	};
}

var abBolo = bolo('Adil bhai');

console.log(abBolo.firstFunc('Yo yo adil'));
console.log(abBolo.secondFunc('Fasih Bhai k baal  '));