(function(){
	'use strict';

	/** @ngInject */
	angular
		.module('taste-angular')
		.service('UserService', UserService);

		function UserService() {
			var user = {
				name: "Iqrar Raza",
				email: "razazaidisd@gmail.com",
				roles: ["developer", "admin", "support_engineer"]
			};

			var userFriends = [
				{
					id: 1,
					name: "Adil"
				},
				{
					id:2,
					name: "fasih"
				}
			];


			function updateUsername(username){
				user.name = username;
			}

			return {
				user,
				userFriends,
				updateUsername
			}
		}

})();