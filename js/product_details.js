$(function () {
    // 商品圖輪播
    $('#slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#slider_nav'
    });
    $('#slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#slider_for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    // 星評
    $('#star_rating').starRating({
        initialRating: 4,
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 25
    });

    // 數量
    $('#num').TouchSpin({
        min: 1,
    });
})