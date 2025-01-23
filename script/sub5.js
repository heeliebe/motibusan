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

    // 타이틀 형광펜
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