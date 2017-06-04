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
      templateUrl: 'app/shared/ta-user-component/ta-user-component.html'
    });


		function UserComponentCtrl() {
			var vm = this;

      // User List functions 
      function changeFriendType(){
        vm.user.isAdded = !vm.user.isAdded;
      }

      vm.changeFriendType = changeFriendType;
		}


})();