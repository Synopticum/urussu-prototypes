$(document).ready(function () {
    $('.map').on('dblclick', function (e) {
        if (window.role === 'admin' || window.role === 'user') {
            var content = '<div class="marker">' +
                            '<div class="marker-content">' +
                                '<div class="marker-image"></div>' +
                                '<div class="marker-text"><h6>Уруссинская ГРЭС</h6>Государственная районная электростанция. Построена и работает с 1947 года.<br><span class="link-to-comments">Читать комментарии</span></div>' +
                                '<div class="marker-controls">' +
                                    '<span class="icon icon-close"></span><br>' +
                                    '<span class="icon icon-edit"></span><br>' +
                                    '<span class="icon icon-remove"><div class="confirm"><div class="yes">Удалить</div>&nbsp;&nbsp;/&nbsp;&nbsp;<div class="no">Не удалять</div></div></span><br>' +
                                '</div>' +
                            '</div>' +
                          '</div>',
                item = $(content).css({
                    left: 'calc(' + e.clientX + 'px - 16px)',
                    top: 'calc(' + e.clientY + 'px - 16px)'
                });

            $('.overlay').show().find('h1').find('span').text('Добавить точку');
            $('.overlay').find('.cancel').text('Отменить добавление');
            $('.overlay').find('.submit').text('Добавить');

            $('.popup-close, .cancel', this).click(function () {
                $('.overlay').hide();
                item = null;
            });

            $('.submit').click(function () {
                $('.overlay').hide();
                $('.map').append(item);

                $(item).click(function () {
                    $(this).find('.marker-content').show();
                });

                $('.icon-edit', item).click(function () {
                    $('.overlay').show().find('h1').find('span').text('Изменить точку');
                    $('.overlay').find('.cancel').text('Отменить изменения');
                    $('.overlay').find('.submit').text('Изменить');
                });

                $('.icon-remove', item).click(function () {
                    $('.confirm', this).show();

                    $('.yes', this).click(function () {
                        $(this).closest('.marker').hide();
                    });

                    $('.no', this).click(function (e) {
                        e.stopPropagation();
                        $(this).closest('.confirm').hide();
                    });
                });

                $('.icon-close', item).click(function (e) {
                    e.stopPropagation();
                    $(this).closest('.marker-content').hide();
                });

                $('.link-to-comments', item).click(function (e) {
                    e.stopPropagation();
                    $('.overlay2').show();
                });

                tooltip($('.dot-add'), true);
            });

            $('.send').click(function () {
                $('.overlay2').hide();
                tooltip($('.comment-added'), true);
            });
        } else if (window.role === 'anonymous') {
            tooltip($('.auth-error'), true);
        }
    });
});