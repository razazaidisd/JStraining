(function(){
	'use strict';

	angular
		.module('taste-angular')
		.controller('HomeController', HomeController);

	/** @ngInject */
	function HomeController(HomeService){
		var vm = this;
		vm.pageTitle = "Home Dynamic Heading coming from controller!";
		
		

		vm.HomeService = HomeService;
	}

})();