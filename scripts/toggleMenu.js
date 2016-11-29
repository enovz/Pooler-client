$(document).ready(function () {
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            var element = $("#menu");
            $("#wrapper").toggleClass("toggled");
``          
            if (element.hasClass("fa-bars")) {
                element.addClass('fa-close').removeClass('fa-bars');
            }
            else {
                element.addClass('fa-bars').removeClass('fa-close');
            }
        });
})