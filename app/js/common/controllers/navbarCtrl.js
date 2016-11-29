/**
 * Navbar :
 *          1. get navbar options for currentUser (guest/user) --> defined in corresponding Ctrl
 *          2. actions for all users : 
 *                                      1. Home
 *                                      2. Latest Pools 
 *                                      3. Most Voted Pools     
 */
angular.module('ngApp')
    .controller('navbarCtrl', ['$scope', '$rootScope', '$location', 'Navbar', 'Authentication', 'Pool',
        function ($scope, $rootScope, $location, Navbar, Authentication, Pool) {

            //helper function
            $scope.callFunction = function (name) {
                if (angular.isFunction($scope[name]))
                    $scope[name]();
            }
            $rootScope.currentUser = Authentication.isLoggedIn();
            //watch for change in currentUser
            $scope.$watch(function () {
                return Authentication.isLoggedIn();
            }, function (newValue) {
                $scope.navLeft = Navbar.getFor(newValue).left;
                $scope.navRight = Navbar.getFor(newValue).right;
            });

            $scope.home = function () {
                $rootScope.pools = [];
                $location.path('/');
            }
            $scope.latestPools = function () {
                if ($scope.pageTitle === "Register" || $scope.pageTitle === "Login") { $location.path('/#/'); }
                Pool.latest(function(pools){
                    $rootScope.pools = pools;
                });
            }
            $scope.mostVotedPools = function () {
                if ($scope.pageTitle === "Register" || $scope.pageTitle === "Login") { $location.path('/#/'); }
                Pool.byVotes(function(pools){
                    $rootScope.pools = pools;
                })
            }
            $rootScope.openPool = function (pool) {
                $location.path('/pool/' + pool._id);
            }
            $scope.logout = function () {
                Authentication.logout(function () {
                    $location.path('/#/');
                });
            }
            $scope.userPanel = function () {
                $location.path('/user/' + $scope.currentUser.userInfo._id);
            }
        }]);
