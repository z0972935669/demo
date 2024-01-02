$(function () {
    // 主輪播
    $('#slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // go top
    $(window).scroll(function () {
        let topPos = $(this).scrollTop();

        if (topPos > 100) {
            $('#gotop').css("opacity", "1");
        } else {
            $('#gotop').css("opacity", "0");
        }
    });

    $('#gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 100);
        return false;
    });

    $(window).on('resize', function() {
        if ($(window).width() < 1200) {
            closeMenu();
        }
    })

    // menu (漢堡)
    $('#menu').on('click', function() {
        if ($(this).find('i').hasClass('fa-bars')) {
            $(this).find('i').removeClass('fa fa-bars').addClass('fa fa-times');
            $('#m_nav').addClass('active');
            $('#menu_list').stop().animate({
                width: '100%'
            })
        } else {
            closeMenu()
        }
    })

    // 閉閉menu
    function closeMenu() {
        $('#menu').find('i').removeClass('fa fa-times').addClass('fa fa-bars');
        $('#m_nav').removeClass('active');
        $('#menu_list').stop().animate({
            width: '0'
        })
    }
})