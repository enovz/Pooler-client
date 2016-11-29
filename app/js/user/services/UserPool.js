/**        
 */
angular.module('ngApp')
    .factory('UserPool', ['$http','Authentication', function ($http, Authentication) {
            return {
                create: function (pool) {
                    var user = Authentication.getCurrentUser();
                    $http.defaults.headers.common['Authorization'] = user.token;
                    $http.post('/api/user/'+ user.userInfo._id + '/pool', pool)
                        .then(function (data, status, headers) {
                            
                        }, function (err) { return err; })
                }
            }
        }]);