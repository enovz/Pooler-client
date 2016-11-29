//use resourece instead of http

angular.module('ngApp')
    .factory('Pool', function ($http) {
        return {
            latest: function (cb) {
                $http.get('/public/pool/latest')
                    .then(function (data, status, headers) {
                        cb(data.data);
                    }, function (err) { return(err); })
            },
            byVotes: function (cb) {
                $http.get('/public/pool/byVotes')
                    .then(function (data, status, headers) {
                        cb(data.data);
                    }, function (err) { return(err); })
            }, 
            getById: function (pool_id, cb) {
                $http.get('/public/pool/' + pool_id)
                    .then(function (data, status, headers) {
                        cb(data.data);
                    }, function (err) { return(err); })
            }
        }
    });
