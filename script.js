$(window).load(function () {
    $('.navbar').on('tap', '.ham', function () {
        /* opens the menu on mobile*/
        $(this).toggleClass('opened');
        $('.sub-menu').toggleClass('closed');
        $('html').toggleClass('modal-opened');
    });
    $('.navbar').on('tap', '.phone', function () {
        $('.phone-modal').toggleClass('in');
    });
    $('.badge').on('tap', function replay() {
        $(this).get(0).play();
    });

    /* Clicking on the scroll down button of each page goes to the next section, taking the navbar into account */
    $('.scroll-down').on('tap', 'label', function toNextSection() {
        var parent = $(this).closest('section.hero');
        console.log(parent.height() + 'px');

        $('html, body').animate({
            scrollTop: parent.height() - $('.navbar').height()
        }, 600);
        return false;
    });
