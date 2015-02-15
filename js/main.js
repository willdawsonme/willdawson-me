function me() {
    $('.btn-me').click(function(e) {
        e.preventDefault();

        $('.page-wrap').css('position', 'fixed');
        $('.me').fadeIn();
        
    });

    $('.btn-close').click(function(e) {
        e.preventDefault();

        $('.me').fadeOut(function() {
            $('.page-wrap').css('position', 'static');
        });
    });
}

$(document).ready(function() {
    me();
});