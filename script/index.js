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

    // 지도 호버
    $('.map>a').hover(function () {
        $(this).addClass('on').siblings().removeClass('on, unselected');
        $('.map-road-on').removeClass('active');
        $('.map-road-off').addClass('active');

    }, function () {
        $(this).removeClass('on').siblings().removeClass('on');
        $('.map-road-off').removeClass('active');
        $('.map-road-on').addClass('active');
        $('.map_click .map-road-on').removeClass('active');
        $('.map_click .map-road-off').addClass('active');
    });

    // 지도 팝업
    $('.map a').click(function () {
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
        $(this).siblings().addClass('unselected');
        $('.map-road-on').removeClass('active');
        $('.map-road-off').addClass('active');
        $(this).parent().addClass('map_click');

        $('.map').stop().animate({
            left: '7%'
        }, 800);

        $('.map_title').stop().animate({
            top: '7%'
        });
    });

    $('.map_road1').click(function () {
        $('.road1').addClass('box_animation');
        $('.road1').siblings().removeClass('box_animation');
    });

    $('.map_road2').click(function () {
        $('.road2').addClass('box_animation');
        $('.road2').siblings().removeClass('box_animation');
    });

    $('.map_road3').click(function () {
        $('.road3').addClass('box_animation');
        $('.road3').siblings().removeClass('box_animation');
    });

    $('.map_road4').click(function () {
        $('.road4').addClass('box_animation');
        $('.road4').siblings().removeClass('box_animation');
    });

    $('.map_road5').click(function () {
        $('.road5').addClass('box_animation');
        $('.road5').siblings().removeClass('box_animation');
    });

    $('.map_road6').click(function () {
        $('.road6').addClass('box_animation');
        $('.road6').siblings().removeClass('box_animation');
    });

    $('.map_road7').click(function () {
        $('.road7').addClass('box_animation');
        $('.road7').siblings().removeClass('box_animation');
    });

    $('.map_road8').click(function () {
        $('.road8').addClass('box_animation');
        $('.road8').siblings().removeClass('box_animation');
    });

    $('.map_road9').click(function () {
        $('.road9').addClass('box_animation');
        $('.road9').siblings().removeClass('box_animation');
    });

    // 추천코스 탭 이동
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn(1000);
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();

    // 명예의 전당 타이틀 형광펜
    // IntersectionObserver 를 등록한다.
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // 관찰 대상이 viewport 안에 들어온 경우 'on' 클래스를 추가
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('title_on');
            }
            // 그 외의 경우 'on' 클래스 제거
            else {
                entry.target.classList.remove('title_on');
            }
        });
    });

    // 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
    const boxElList = document.querySelectorAll('.highlight');
    boxElList.forEach((el) => {
        io.observe(el);
    });

    // 명예의 전당 카운터
    var executed1 = false;
    var executed2 = false;

    $('.contents_ranking').waypoint(function ani () {
        var targetNumber = $('.animate1').attr('data-rate');
        if (!executed1) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.animate1').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 3000);
            executed1 = true;
        }
       
    },
        {
            offset: '80%'
        },
        
    );

    $('.contents_ranking').waypoint(function () {
        var targetNumber = $('.animate2').attr('data-rate');
        if (!executed2) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.animate2').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 3000);
            executed2 = true;
        }
    },
        {
            offset: '80%'
        }
    );

    // 명예의 전당 슬라이드
    $("#scroller").simplyScroll({
        speed: 1,
        pauseOnHover : false
    });

    // 공지사항 탭 이동
    $('.notice_tab > div').hide();
    $('.notice_nav a').click(function () {
        $('.notice_tab > div').hide().filter(this.hash).fadeIn();
        $('.notice_nav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();

    // 모티 갤러리 슬라이드
    $("#scroller2").simplyScroll({
        speed: 1,
        orientation: 'vertical',
        direction:'backwards',
        customClass: 'vert',
    });

    $("#scroller3").simplyScroll({
        speed: 1,
        orientation: 'vertical',
        customClass: 'vert',
    });

    $("#scroller4").simplyScroll({
        speed: 1,
        orientation: 'vertical',
        direction:'backwards',
        customClass: 'vert',
    });
});

// 메인배너 슬라이드
var swiper = new Swiper('.bn_img ', {
    speed: 1000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    allowTouchMove: false
});

var swiper2 = new Swiper('.minimap ', {
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 2,
    thumbs: {
        swiper: swiper,
    },
    allowTouchMove: false
});

var swiper3 = new Swiper('.text ', {
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    thumbs: {
        swiper: swiper,
    },

    allowTouchMove: false
});

var swiper4 = new Swiper('.weather_in .slide2', {
    direction: "vertical",
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    // allowTouchMove: false
});

// 추천코스 탭 슬라이드
var swiper5 = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 100,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 배너 슬라이드
var swiper6 = new Swiper('.mid-banner', {
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
});

