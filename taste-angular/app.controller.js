(function(){
	'use strict';

	angular
		.module('taste-angular')
		.controller('AppController', AppController);

	/** @ngInject */
	function AppController(){
		var vm = this;
		vm.name = null;
		

		function printMyName(name){
			vm.name = name;
		}

		// User Array 
		vm.users = [
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

 		/* Dropdown */
 		vm.options = ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6'];


 		/* Dropdown End*/
		vm.status = {
	    isopen: false
	  };
 		function toggleDropdown() {
	    vm.status.isopen = !vm.status.isopen;
	  }





		// Expose functions
		vm.printMyName = printMyName;
		vm.toggleDropdown = toggleDropdown;

	}

})();