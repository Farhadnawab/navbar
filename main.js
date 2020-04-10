(function ($) {

    /* Menu Toggle */
    $(document).on("click","#menu-open, #menu-close",function(){
        $('body').toggleClass("main-menu-active");
    });

    /* Menu Dropdown Toggle */
    $(document).on("click","ul.menu-links li a",function(){
        $(this).closest("li").toggleClass("expanded");
    });

    /** Sticky Header **/
    Scroll = $(window).scrollTop();
    function StickyHeader(){		
        Scroll = $(window).scrollTop();
        
        if (Scroll >= 1)
            $("body").addClass('sticked');
        else
            $("body").removeClass('sticked');
    }
    StickyHeader();
    $(window).scroll(function(){
        StickyHeader();
    });

}(jQuery));
