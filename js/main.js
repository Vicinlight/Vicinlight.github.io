$(function () {
    $('a.cv_head_nav__link, .cv_header__btn').each(function () {
        let th = this;
        // alert($(th).attr('href'));
        $(th).on('click', function (e) {
            e.preventDefault();
            let id = $(th).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1200);
            return false;
        });

    });

});
$('.carousel').carousel({
    interval: 2000
});

