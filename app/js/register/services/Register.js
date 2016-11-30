//TODO:
//1. use resourece instead of http
//2. SSL bro

angular.module('ngApp')
    .factory('Register', function ($http) {
        return {
            newUser: function (user, cb) {
                $http.post('/api/register', user)
                    .then(function (data, status, headers) {
                        cb(data);
                    }, function (err) { return err; })
            }
        }
    });
