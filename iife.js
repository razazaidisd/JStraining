// IIFE - Imediately Invokable function expression
(function(){
	var aaa = 'blb blb ';
	console.log({inConstructor:aaa});
})();


var val1 = function (){
	var obj = {
		val: 'asdas'
	}
	console.log({obj});
};
var val2 = function (){
	console.log('I am in val2');
};

var object = {
	val1,
	val2
}

object.val1();

// We used to do this in jQuery - IIFE
/*$(function() {
  // The DOM is ready!
  // The rest of your code goes here!
});*/
