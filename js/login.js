$(document).ready(function () {
//    global
    $('.error, .notice').find('.close').click(function () {
        $(this).parent().hide();
    });

//    login
    $('.vk').click(function () {
        $('.login-error').fadeIn();
    });

    $('.anon').click(function () {
        $('.login-error').hide();
    });

    $('.support').find('a').click(function (e) {
        e.preventDefault();
        $('.login-popup').hide();
        $('.more').hide();
        $('.feedback-popup').show();
        $('.back').show();
    });

    $('.send').click(function () {
        tooltip($('.send-notice'), true);
    });

    $('.back').click(function () {
        $('.feedback-popup').hide();
        $('.info-popup').hide();
        $('.back').hide();
        $('.login-popup').show();
        $('.more').show();
    });

    $('.more').click(function () {
        $('.login-popup').hide();
        $('.more').hide();
        $('.info-popup').show();
        $('.back').show();
    });
});