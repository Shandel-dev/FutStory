const swiperBanner = new Swiper('.swiper-banner', {
    direction: 'horizontal',

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
    },
    loop: true,
})

const theme = document.getElementById("lbl_theme")

theme.addEventListener("click", (e) =>{
    const check_theme = document.getElementById("input_tema")
    const main = document.querySelector("main")
    const aside = document.querySelector("aside")
    const linksaside = document.querySelector(".aside_links a")

    main.classList.toggle("main-dark")
    aside.classList.toggle("aside-dark")

    

    if(check_theme.checked){    //mudar para tema claro
        mudarTema("<i class='fa-solid fa-futbol'></i>", false)
    } else{     //mudar para tema escuro
        mudarTema("<i class='fa-solid fa-moon'></i>", true)
    }

    function mudarTema(icon, theme_status){
        theme.innerHTML = icon
        check_theme.checked = theme_status
    }
})