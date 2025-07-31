$(document).ready(function() {
    $('.open-btn').click(function() {
        $('#navbar').toggleClass('in');
    });
    
    $('.close-navbar').click(function() {
        $('#navbar').removeClass('in');
    });
});
