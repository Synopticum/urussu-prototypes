$(document).ready(function () {
    $('.create-layer').click(function (e) {
        e.stopPropagation();
        $('.create-layer-form').toggle();
    });

    $('.create-layer-form').find('.textbox').click(function (e) {
        e.stopPropagation();
    });

    $('.create-layer-form').find('.textbox').on('keypress', function () {
        $(this).siblings('.icon-submit').css('display', 'inline-block');
        $(this).siblings('.icon-remove').hide();
    });

    $('.create-layer-form').find('.icon-submit').click(function () {
        tooltip($('.layer-added'), true);
    });

    $('.create-layer-form').find('.icon-remove').click(function (e) {
        e.stopPropagation();
        $(this).find('.confirm').show();
    });
});