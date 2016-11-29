angular.module('ngApp')
    .factory('UserPersistence2', ['$cookies', function ($cookies) {
        var user;
        return {
            setCookieData: function (user) {
                user.token = user.token;
                user.userInfo = user.userInfo;
                $cookies.put("user", JSON.stringify(user));
            },
            getCookieData: function () {
                user = $cookies.get("user");
                return JSON.parse(user);
            },
            clearCookieData: function () {
                user = {};
                $cookies.remove("user");
            }
        }
    }]);
