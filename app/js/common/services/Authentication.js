angular.module('ngApp')
    .factory('Authentication', ['UserPersistence', function (UserPersistence) {
        var currentUser;
        return {
            isLoggedIn: function () {
                if (!currentUser) { return "Guest"; }
                return currentUser;
            },
            setCurrentUser: function (user) {
                UserPersistence.setUser(user);
                currentUser = UserPersistence.getUser();
            },
            getCurrentUser: function () {
                currentUser = UserPersistence.getUser();
                return currentUser;
            },
            logout : function(cb){
                UserPersistence.logout();
                currentUser = "Guest";
                cb();
            }
        }
    }]);
