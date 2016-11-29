//TODO : add persistanceService via ngCookie 

angular.module('ngApp')
	.controller('registerCtrl', ['$scope', '$location', 'Register', 'Authentication',
		function ($scope, $location, Register, Authentication) {

			$scope.pageTitle = 'Register';

			function resetForm() {
				$scope.user = {};
				$scope.confirmPassword = "";
			}
			$scope.submit = function (user) {
				Register.newUser(user, function (result) {
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
			$scope.login = function () {
				$location.path('/login');
			}
		}]);
