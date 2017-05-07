

/////// Prototype ////
var usersArr = [
  {
		firstName: 'Fasih',
    lastName: 'Naqvi',
    age: 78
  },
  {
		firstName: 'Ahmed',
    lastName: 'babrey',
    age: 20
  },
  {
		firstName: 'Mohammad',
    lastName: 'Adil',
    age: 34
  },
  {
		firstName: 'Fariha',
    lastName: 'Narjis',
    age: 23
  },
  {
		firstName: 'Asif',
    lastName: 'Qureshi',
    age: 45
  },
  {
		firstName: 'Iqrar',
    lastName: 'Raza',
    age: 68
  }
];


var getUsersFullNames = function (){
  return this.map(
    function(obj, index){
      return obj.firstName + ' ' + obj.lastName + " " + index;
    }
  )
}
Array.prototype.getUsersFullNames = getUsersFullNames;


// Mapped array of users - to get the fullname
var users = usersArr.getUsersFullNames();
console.log({users});
//['Fasih Naqvi', 'Ahmed Babrey'...]



// Filter array of user - to get the old age persons
var oldUsers = usersArr.filter(function(obj){
		return obj.age > 50;
	}).getUsersFullNames();


console.log({oldUsers});