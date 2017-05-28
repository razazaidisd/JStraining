(function() {
  'use strict';

  angular
    .module('taste-angular')
    .component('userComponent', {
      bindings: {
      	user: "<"
      },
      controller: UserComponentCtrl,
      controllerAs: 'vm',
      template: '<div>User Component <br />{{vm.user.name}} <br /> {{vm.user.email}}</div>'
    });


		function UserComponentCtrl() {
			var vm = this;


		}


})();