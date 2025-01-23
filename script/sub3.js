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

    // 아코디언 Q&A (공지사항)
    $(".question li").click(function () {
        $(this).children("div").slideToggle()
        $(this).siblings().children("div").slideUp();
        $(this).toggleClass("on").siblings().removeClass("on")
    });
});

// 모티 프로그램 포스터 슬라이드
var swiper3 = new Swiper(".program_slide", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
});

// 함께 걷기 후기 왼쪽 사진
var swiper = new Swiper(".thumbimg", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".mainimg", {
    loop: true,
    spaceBetween: 10,
    speed: 1000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

// 함께 걷기 후기 오른쪽 리뷰
var swiper4 = new Swiper(".review_text", {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
});