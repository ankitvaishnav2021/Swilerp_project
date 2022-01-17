$(document).ready(function () {

    AOS.init();


    var owl = $('.sagment-autoslider .owl-carousel');
    owl.owlCarousel({

        autoplay: true,
        autoplayTimeout: 2000,
        fluidSpeed: true,
        smartSpeed: 2000,
        autoplayHoverPause: false,
        margin: 30,
        loop: true,
        autoWidth: true,
        items: 4,
        nav: false,
        dots: false,
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    });



    /* Page Scroll Top */
    $(this).scrollTop(0);
    $('.soft-download-heading').scrollTop(0);

    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf("/") + 1);
    var hash = window.location.hash.substr(1);
    if ((curpage == "" || curpage == "/" || curpage == "admin") && hash == "") {
        //$("nav .navbar-nav > li:first-child").addClass("active");
    } else {
        $(".navigation-menu li").each(function () {
            $(this).removeClass("active");
        });
        if (hash != "")
            $(".navigation-menu li a[routerlink*='" + hash + "']")
                .parents("li")
                .addClass("active");
        else
            $(".navigation-menu li a[routerlink*='" + curpage + "']")
                .parents("li")
                .addClass("active");
    }
    scrollToTop();


    var windows = $(window);
    var screenSize = windows.width();
    var sticky = $("header");
    var $html = $("html");
    var $body = $("body");

    windows.on("scroll", function () {
        var scroll = windows.scrollTop();
        var headerHeight = sticky.height();

        if (screenSize >= 320) {
            if (scroll < headerHeight) {
                sticky.removeClass("is-sticky");
            } else {
                sticky.addClass("is-sticky");
            }
        }
    });

})

/*----------  Scroll to top  ----------*/
function scrollToTop() {
    var $scrollUp = $("#scroll-top"),
        $lastScrollTop = 0,
        $window = $(window);

    $window.on("scroll", function () {
        var st = $(this).scrollTop();
        if (st > $lastScrollTop) {
            $scrollUp.removeClass("show");
        } else {
            if ($window.scrollTop() > 200) {
                $scrollUp.addClass("show");
            } else {
                $scrollUp.removeClass("show");
            }
        }
        $lastScrollTop = st;
    });

    $scrollUp.on("click", function (evt) {
        $("html, body").animate({ scrollTop: 0 }, 600);
        evt.preventDefault();
    });




}






