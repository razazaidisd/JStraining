var arrSimple = [1,2,3,4,5,6];


for (var i = 0; i < arrSimple.length; i++) {
	arrSimple[i] = arrSimple[i] * 2;
}
console.log({arrSimple})

var mappedArr = arrSimple.map(function (val){
								return val * 2 ;
							});
console.log({mappedArr});


var filteredArr = arrSimple.filter(
										function (val){
											return val >= 3 && val < 5;
										}
									)
console.log({filteredArr});