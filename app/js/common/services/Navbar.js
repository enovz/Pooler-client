/**TODO: replace title with html fontawesome icons
 * Service :
 *          1. defaultSidebar is available for every user
 *          2. getFor returns a sidebar for the currentUser (guest or user)
 */
angular.module('ngApp')
    .factory('Navbar', [function () {
        var navbar = {
            left: [
                { action: 'latestPools', title: 'Latest Pools' },
                { action: 'mostVotedPools', title: 'Most Voted Pools' }
            ]
        }
        return {
            getFor: function (currentUser) {
                if (currentUser == "Guest") {
                    var guestNavbar = [
                        { action: 'login', title: 'Login' },
                        { action: 'register', title: 'Register' }
                    ];
                    navbar.right = guestNavbar;
                    return navbar;
                }
                else {
                    var userNavbar = [
                        { action: 'userPanel', title: 'My Panel' },
                        { action: 'logout', title: 'Logout' }
                    ];
                    navbar.right = userNavbar;
                    return navbar;
                }
            },
        }
    }]);
