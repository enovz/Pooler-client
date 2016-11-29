angular.module('ngApp')
    .factory('UserPersistence', ['$sessionStorage', '$window', function ($sessionStorage, $window) {
        return {
            setUser :  function (user) {
                $sessionStorage.user = angular.toJson(user);
            },
            getUser : function () {
                return angular.fromJson($sessionStorage.user)
            },
            logout: function(){
                $window.sessionStorage.clear();
            }
        }
    }]);
