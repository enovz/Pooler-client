
angular.module('ngApp')
	.controller('loginCtrl', ['$scope', '$location', 'Login', 'Authentication',
		function ($scope, $location, Login, Authentication) {

			$scope.pageTitle = 'Login';

			function resetForm() {
				$scope.user = {};
			}
			$scope.submit = function (user) {
				Login.getUser(user, function (result) {
					Authentication.setCurrentUser(result.data);
					var id = Authentication.getCurrentUser().userInfo._id;
					if (Authentication.isLoggedIn() !== 'Guest') {
						$location.path('/user/' + id);
						resetForm();
					}
					else {
						resetForm();
						$scope.pageTitle = 'Login Failed';
					}
				});
			}
			$scope.register = function () {
				$location.path('/register');
			}

		}]);
