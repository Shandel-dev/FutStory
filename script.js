const swiperBanner = new Swiper('.swiper-banner', {
    direction: 'horizontal', // Alterado para horizontal

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 10000,
    }
})
