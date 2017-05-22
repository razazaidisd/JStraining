(function(){
	'use strict';

	angular
		.module('taste-angular')
		.controller('AboutController', AboutController);

	/** @ngInject */
	function AboutController(){
		var vm = this;
		console.log('About controller');
	}

})();