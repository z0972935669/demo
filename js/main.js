$(function () {
    // 電腦版搜尋
    $('#search').on('click', function() {
        if ($('#search_input').hasClass('active')) {
            $('#search_input').removeClass('active');
        } else {
            $('#search_input').addClass('active');
        }
    })

    // 手機版搜尋
    $('#m_search').on('click', function() {
        if ($('#m_search_input').hasClass('active')) {
            $('#m_search_input').removeClass('active');
        } else {
            $('#m_search_input').addClass('active');
        }
    })

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