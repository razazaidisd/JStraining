(function(){
	'use strict';

	angular
		.module('taste-angular')
		.controller('AboutController', AboutController);

	/** @ngInject */
	function AboutController(UserService){
		var vm = this;
		vm.UserService = UserService;
		vm.username = vm.UserService.user.name;

	}

})();