/**poolCtrl: displays information from poold with id 
 *          1. checks if user is guest or loggedIn
 *          2. get currentUser 
 *          2. handle voting on pools --> service
 *          
 */
angular.module('ngApp')
    .controller('poolCtrl', ['$scope', '$routeParams', '$location', 'Navbar', 'Pool', 'Authentication', 'BallotBox', 'chart.js',
        function ($scope, $routeParams, $location, Navbar, Pool, Authentication, BallotBox) {

            $scope.pageTitle = $routeParams.pool_id;
            /**TODO:
             *      1. Authentication.isLoggedIn()
             *      2. Guset options : none ( guest can only view chart)
             *      3. User options :
             *                        1. view chart
             *                        2. enable voting --> vote() shows voting Panel
             */
            var currentUser = Authentication.getCurrentUser();
            if (currentUser === "Guest") {
                //options for guest
            }
            else {
                //options for user
                $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
                $scope.series = ['Series A', 'Series B'];

                $scope.data = [
                    [65, 59, 80, 81, 56, 55, 40],
                    [28, 48, 40, 19, 86, 27, 90]
                ];
            }


        }]);