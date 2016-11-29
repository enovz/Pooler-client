/**USER ca:
	1. user can logout
	2. user can browse pools --> and vote (Pool provider)
	3. user can CRUD his pools --> 
 */

angular.module('ngApp')
    .controller('userCtrl', ['$scope', '$routeParams', '$location', 'Authentication', 'UserPool',
        function ($scope, $routeParams, $location, Authentication, UserPool) {

            var currentUser = Authentication.getCurrentUser();
            if (currentUser === "Guest") { $location.path('/login'); }
            $scope.username = currentUser.userInfo.username;

            function resetPoolForm() {
                $scope.pool = {};
                $scope.dataset = [];
                $scope.newLabel = "";
                $scope.titleWarning = false;
                $scope.dataWarning = false;
            }

            //ng-show vars
            $scope.open_close = "New Pool"
            $scope.poolForm = false;
            $scope.titleWarning = false;
            $scope.dataWarning = false;

            //new Pool controls
            $scope.showPoolForm = function () {
                $scope.poolForm = !$scope.poolForm;
                if($scope.open_close === "New Pool"){ $scope.open_close = "Close Pool" }
                else{ $scope.open_close = "New Pool"}
                resetPoolForm();
            }
            $scope.addData = function () {
                var data = { label: $scope.newLabel };
                if ($scope.newLabel === "" || !$scope.newLabel) {
                    $scope.dataWarning = true;
                }
                else {
                    $scope.dataset.push(data);
                    $scope.newLabel = "";
                }
            }
            $scope.removeData = function (index) {
                $scope.dataset.splice(index, 1);
            }
            $scope.checkForm = function () {
                if ($scope.poolForm) {
                    if (!($scope.pool.title) || $scope.pool.title === "") {
                        $scope.titleWarning = true; return true;
                    }
                    if ($scope.pool.title) { $scope.titleWarning = false; }
                    if ($scope.dataset.find(function (data) {
                        return data.label === "";
                    }) || $scope.dataset.length < 1) {
                        $scope.dataWarning = true;
                        return true;
                    }
                    else {
                        $scope.dataWarning = false;
                        return false;
                    }
                }
            }
            $scope.submitPool = function () {
                var pool = {};
                pool.title = $scope.pool.title;
                pool.dataset = $scope.dataset;
                UserPool.create(pool);
                resetPoolForm();
            }
            //end new Pool controls

            //TODO:
            //2. UserPools
            $scope.userPools = function () {
                //call UserPools.getAll();
            }
            //3.Logout
            $scope.logout = function () {
                Authentication.logout(function () {
                    $location.path('/#/');
                });
            }
        }]);
