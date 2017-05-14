(function(){
	'use strict';

	angular
		.module('taste-angular')
		.controller('AppController', AppController);

	/** @ngInject */
	function AppController(){
		var vm = this;

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
	}

})();