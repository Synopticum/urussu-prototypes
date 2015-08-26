$(document).ready(function () {
    $('.create-layer').click(function (e) {
        e.stopPropagation();
        $('.create-layer-form').toggle();
    });

    $('.textbox').click(function (e) {
        e.stopPropagation();
    });

    $('.create-layer-form').find('.icon-submit').click(function () {
        tooltip($('.layer-added'), true);
    });
});