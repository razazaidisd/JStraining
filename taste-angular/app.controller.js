(function(){
	'use strict';

	angular
		.module('taste-angular')
		.controller('AppController', AppController);

	/** @ngInject */
	function AppController(HomeService, UserService){
		var vm = this;
		vm.HomeService = HomeService;
		vm.UserService = UserService;

		

	}

})();