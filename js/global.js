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

    $('.map').click(function () {
        $('.admin-menu').hide();
    });

    $('.map').on('contextmenu', function (e) {
        if (window.role === 'admin') {
            e.preventDefault();

            $('.admin-menu').show().css({
                left: e.pageX,
                top: e.pageY
            });

            $('.admin-menu').find('.button').siblings().hide();
        }
    });

    $(document).on('keyup', function (e) {
        if (e.keyCode === 13) {
            $('.launchpad').show();
            $('.enter').hide();
        }

        if (e.keyCode === 27) {
            $('.launchpad').hide();
        }
    });

    $('.enter').click(function (e) {
        if (e.keyCode === 13) {
            $('.launchpad').show();
        }
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