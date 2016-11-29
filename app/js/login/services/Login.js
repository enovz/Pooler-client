//TODO:
//1. use resourece instead of http
//2. SSL bro

angular.module('ngApp')
    .factory('Login', ['$http', function ($http) {
        return {
            getUser: function (user, cb) {
                $http.post('/public/login', user)
                    .then(function (data, status, headers) {
                        cb(data);
                    }, function (err) { return err; })
            }
        }
    }]);
