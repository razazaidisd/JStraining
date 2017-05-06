/**
* JS Training - Iqrar Raza
* 6 May 2017 - Code
*/ 



var bootstrapObj = {};
for(var i = 1; i<= 5; i++){
	bootstrapObj['colmd'+ i] = i*5; 
}
console.log(bootstrapObj)




Class Furniture {
	var weight = 1;
  var size = 2;
  
  var features = [1,2,4,56,7,8];
  
  function folding(){
  	var test = {};
  }
}


var Array = new Object;

chair.size = 20;
chair.weight = '2';




var a = {
	name: "raza",
  age: 23
};

var b = new Object;
b.name = "raza";
b.age = 23;




var person = {
  id: 1,
  name: "raza",
  company: "Westwing",
  myArr: [],
  myObj: {
    ab : 'asdasd',
    testObj: 'asdasd'
  }
};
person.age = 23;
person["hobby"] = 'travelling';

person.walking = function() { console.log('I am walking')} 

var bootstrapObj = {};
for(var i = 1; i<= 5; i++){
	bootstrapObj['col-md-'+ i] = i*5; 
}

var myVariable = "myRealKey";

var newObj = {
	dyn: 111,
	myVariable: 'aa value'
}

newObj[myVariable] = "we got the real key"

var walkingFunc = function(i, j) {
	console.log('I am walking' + i + " " + j);
};

var myObj =  {
    ab : 'asdasd',
    testObj: 'asdasd'
  };

var person = {
  id: 1,
  name: "raza",
  company: "Westwing",
  myArr: [],
  myObj: myObj,
  walking: walkingFunc
};

person.walking(1,2); 



// Variable -> PASS by value
var a = 'Value of A';
var b = a;
var c = b;

c = "new value set by C";


//Object   -> Pass by reference
var a = {
	val: "Value is A"
};
var b = a;
var c = b;

c.val = "new value set by C";
















