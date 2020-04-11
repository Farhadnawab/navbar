(function ($) {

    /* Hamburger Toggle */
    $(document).on("click","#hamburger-toggle-btn",function(){
        $('body').toggleClass("hamburger-active");
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
