//use resourece instead of http

angular.module('ngApp')
    .factory('Pool', function ($http) {
        return {
            latest: function (cb) {
                $http.get('/api/pools/latest')
                    .then(function (data, status, headers) {
                        cb(data.data);
                    }, function (err) { return(err); })
            },
            byVotes: function (cb) {
                $http.get('/api/pools/byVotes')
                    .then(function (data, status, headers) {
                        cb(data.data);
                    }, function (err) { return(err); })
            }, 
            getById: function (pool_id, cb) {
                $http.get('/api/pools/' + pool_id)
                    .then(function (data, status, headers) {
                        cb(data.data);
                    }, function (err) { return(err); })
            }
        }
    });
