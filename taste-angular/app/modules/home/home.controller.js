(function(){
	'use strict';

	angular
		.module('taste-angular')
		.controller('HomeController', HomeController);

	/** @ngInject */
	function HomeController(HomeService){
		var vm = this;
		vm.name = null;
		vm.pageTitle = "Home Dynamic Heading coming from controller!";

		vm.HomeService = HomeService;

		vm.uId = 1;
		vm.user = {
			email: 'razazaidi@gmail.com',
			name: 'raza'
		};


		function printMyName(name){
			vm.name = name;
		}

		

 		/* Dropdown */
 		vm.options = ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6'];


 		/* Dropdown End*/
		vm.status = {
	    isopen: false
	  };
 		function toggleDropdown() {
		  vm.status.isopen = !vm.status.isopen;
		}
		// User Array 
		vm.users = [
			  {
				id: 1,
				firstName: 'Fasih',
			    lastName: 'Naqvi',
				email: 'Fasih@gmail.com',
				isAdded: false,
			    age: 78
			  },
			  {
				id: 2,
				firstName: 'Ahmed',
				email: 'Ahmed@gmail.com',
				isAdded: true,
			    lastName: 'babrey',
			    age: 20
			  },
			  {
				id: 3,
				firstName: 'Mohammad',
				email: 'Mohammad@gmail.com',
				isAdded: false,
			    lastName: 'Adil',
			    age: 34
			  },
			  {
				id: 4,
				firstName: 'Fariha',
				email: 'Fariha@gmail.com',
				isAdded: false,
			    lastName: 'Narjis',
			    age: 23
			  },
			  {
				id: 5,
				firstName: 'Asif',
				email: 'Asif@gmail.com',
				isAdded: false,
			    lastName: 'Qureshi',
			    age: 45
			  },
			  {
				id: 6,
				firstName: 'Sheraz',
				email: 'sheraz@gmail.com',
				isAdded: false,
			    lastName: 'Raza',
			    age: 68
			  }
		];

		// User List functions 
	    function changeFriendType(){
	    	console.log('testttt');
	      vm.users[1].isAdded = !vm.users[1].isAdded;
	    }






		// Expose functions
		vm.printMyName = printMyName;
		vm.toggleDropdown = toggleDropdown;
		vm.changeFriendType = changeFriendType;
	}




})();