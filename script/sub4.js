AOS.init({
    duration: 1200 //aos 나타나는 속도
});

$(function () {
    // bar 애니메이션
    $('.nav>li>a').hover(function () {
        $(this).parent().addClass('on');
        $(this).parent().siblings().removeClass('on');
        $(this).parent().siblings().removeClass('nav_on');
        $(this).parent().hover(function () {
        }, function () {
            $(this).removeClass('on');
            $('.currentpage').parent().addClass('nav_on');
        });
    });

    if (!($(this).parent().find('ul').length > 0)) {
        $(this).parent().removeClass('on');
    }
});

// 이벤트 왼쪽 작은 배너
var swiper = new Swiper(".event_right", {
    direction: "vertical",
    spaceBetween: 2,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

// 이벤트 오른쪽 큰 배너
var swiper2 = new Swiper(".event_left", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

// 오프라인 매장 슬라이드
$("#scroller").simplyScroll({
    speed: 1,
});