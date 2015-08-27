$(document).ready(function () {
    $('.launch-news').click(function () {
        $('.launchpad').find('nav > .button').removeClass('active');
        $(this).addClass('active');

        $('.launchpad').find('.content > .category').hide();
        $('.launchpad').find('.news').show();
    });

    $('.launch-ads').click(function () {
        $('.launchpad').find('nav > .button').removeClass('active');
        $(this).addClass('active');

        $('.launchpad').find('.content > .category').hide();
        $('.launchpad').find('.ads').show();
    });

    $('.launch-initiatives').click(function () {
        $('.launchpad').find('nav > .button').removeClass('active');
        $(this).addClass('active');

        $('.launchpad').find('.content > .category').hide();
        $('.launchpad').find('.initiatives').show();
    });

    $('.launch-claims').click(function () {
        $('.launchpad').find('nav > .button').removeClass('active');
        $(this).addClass('active');

        $('.launchpad').find('.content > .category').hide();
        $('.launchpad').find('.claims').show();
    });

    $('.launch-anonymous').click(function () {
        $('.launchpad').find('nav > .button').removeClass('active');
        $(this).addClass('active');

        $('.launchpad').find('.content > .category').hide();
        $('.launchpad').find('.anonymous').show();
    });

    $('.launch-transport').click(function () {
        $('.launchpad').find('nav > .button').removeClass('active');
        $(this).addClass('active');

        $('.launchpad').find('.content > .category').hide();
        $('.launchpad').find('.transport').show();
    });
});