(function ($) {

    /* Menu Toggle */
    $(document).on("click","#hamburger-toggle-btn",function(){
        $('body').toggleClass("hamburger-active");
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
