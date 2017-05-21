(function(){
	'use strict';

	angular
		.module('taste-angular')
		.config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/modules/home/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'app/modules/about/about.html',
          controller: 'AboutController',
          controllerAs: 'vm'
        })
    }






		/** @ngInject */
	// function routeConfig($stateProvider, $urlRouterProvider) {
	// 	$stateProvider
 //      .state('home', {
 //        url: '/',
 //        templateUrl: 'app/modules/home/home.html',
 //        controller: 'HomeController',
 //        controllerAs: 'vm'
 //      })
 //      .state('about', {
 //        url: '/about',
 //        templateUrl: 'app/modules/about/about.html',
 //        controller: 'AboutController',
 //        controllerAs: 'vm'
 //      });
 //  	$urlRouterProvider.otherwise('/');

	
})();