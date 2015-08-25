$(document).ready(function () {
    $('.map').on('dblclick', function (e) {
        if (window.role === 'admin' || window.role === 'user') {
            var item = $('<div class="marker"></div>').css({
                left: 'calc(' + e.clientX + 'px - 16px)',
                top: 'calc(' + e.clientY + 'px - 16px)'
            });

            $('.overlay').show();

            $('.popup-close, .cancel', this).click(function () {
                $('.overlay').hide();
                item = null;
            });

            $('.submit').click(function () {
                $('.overlay').hide();
                $('.map').append(item);

                tooltip($('.dot-add'), true);
            });
        } else if (window.role === 'anonymous') {
            tooltip($('.auth-error'), true);
        }
    });
});