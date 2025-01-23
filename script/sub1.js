AOS.init({
    duration: 1200 //aos 나타나는 속도
});


// bar 애니메이션
$(function () {
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

// 주변 관광지 슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 5,
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

// 모티 갤러리 슬라이드
var swiper1 = new Swiper(".galleryBg", {
    loop: true,
    spaceBetween: 10,
    effect: "fade",
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".gallerySlide", {
    loop: true,
    spaceBetween: 10,
    effect: "fade",
    watchSlidesProgress: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    thumbs: {
        swiper: swiper1,
    },
});
