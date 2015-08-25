window.role = 'admin';

$(document).ready(function () {
    $('.change-role').click(function () {
        var role = $(this)[0].id;

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        window.role = role;

        $('body')[0].className = '';
        $('body').addClass('map ' + role);
    });
});

function tooltip ($el, hide) {
    $el.fadeIn();

    if (hide) {
        setTimeout(function () {
            $el.fadeOut();
        }, 3000);
    }
}