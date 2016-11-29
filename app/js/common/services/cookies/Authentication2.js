angular.module('ngApp')
    .factory('Authentication2', ['UserPersistence', function (UserPersistence) {
        var currentUser;
        return {
            isLoggedIn: function () {
                if (!currentUser || currentUser === "Guest") { return "Guest"; }
                return currentUser;
            },
            setCurrentUser: function (user) {
                UserPersistence.setCookieData(user);
                currentUser = UserPersistence.getCookieData();
            },
            getCurrentUser: function () {
                currentUser = UserPersistence.getCookieData();
                return currentUser;
            },
            logout : function(cb){
                UserPersistence.clearCookieData();
                currentUser = "Guest";
                cb();
            }
        }
    }]);
