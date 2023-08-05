$(function () {

    $('.auctions__slider').slick({
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
    })
    
    $('.auctions__slide-prev').on('click', function (e) {
        e.preventDefault()
        $('.auctions__slider').slick('slickPrev')
    })
    $('.auctions__slide-next').on('click', function (e) {
        e.preventDefault()
        $('.auctions__slider').slick('slickNext')
    })
    

})










