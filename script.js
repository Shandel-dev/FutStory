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
    }
})

const theme = document.getElementById("lbl_theme")

theme.addEventListener("click", (e) =>{
    const check_theme = document.getElementById("input_tema")
    const main = document.querySelector("main")
    const aside = document.querySelector("aside")

    if(check_theme.checked){    //mudar para tema claro

        mudarTema("<i class='fa-solid fa-futbol'></i>", false, "var(--cor-dark-primaria)")
        
        main.style.backgroundColor = "var(--cor-primaria)"
        aside.style.backgroundColor = "var(--cor-terciaria)"
        
    } else{     //mudar para tema escuro
        mudarTema("<i class='fa-solid fa-moon'></i>", true, "var(--cor-primaria")
        main.style.backgroundColor = "var(--cor-dark-primaria)"
        aside.style.backgroundColor = "var(--cor-dark-secundaria)"
    }

    function mudarTema(icon, tema, color){
        theme.innerHTML = icon
        check_theme.checked = tema
        main.style.color = color
        aside.style.color = color
    }
})