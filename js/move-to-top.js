//JQuery voor de move-to-top button
$(document).ready(function() {
    var offset = 250;
    var duration = 400;
    jQuery(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

});
