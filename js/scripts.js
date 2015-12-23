/*

 My Custom JS
 =============

 Author:  Oleksandr Green
 Updated: December 2015
 Notes:	 For my Education

 */

$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');
});

$(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");});

$("ul.nav.navbar-nav li a").click(function() {
    $(".navbar-collapse").removeClass("in");
});
