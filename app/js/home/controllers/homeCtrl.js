/**homeCtrl: welcomes user with About site 
 *          1. handles open pool 
 *          2. handles login
 *          3. handles register
 *          
 */

angular.module('ngApp')
    .controller('homeCtrl', ['$scope', '$rootScope','$location', 'Navbar', 'Pool', 'Authentication',
        function ($scope, $rootScope, $location, Navbar, Pool, Authentication) {

            $scope.pageTitle = 'Home Page';
            
            $scope.login = function () {
                $location.path('/login');
            }
            $scope.register = function () {
                $location.path('/register');
            }
        }]);