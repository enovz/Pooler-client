/**        
 */
angular.module('ngApp')
    .factory('UserPool', ['$http','Authentication', function ($http, Authentication) {
            return {
                create: function (pool) {
                    var user = Authentication.getCurrentUser();
                    $http.defaults.headers.common['Authorization'] = user.token;
                    $http.post('/api/users/'+ user.userInfo._id + '/pools', pool)
                        .then(function (data, status, headers) {
                            
                        }, function (err) { return err; })
                }
            }
        }]);