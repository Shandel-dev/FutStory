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

    if(check_theme.checked){
        theme.innerHTML = "<i class='fa-solid fa-futbol'></i>"
        check_theme.checked = false
        main.style.backgroundColor = "var(--cor-primaria)"
        main.style.color = "black"
    } else{
        theme.innerHTML = "<i class='fa-solid fa-moon'></i>"
        check_theme.checked = true
        
        main.style.color = "var(--cor-primaria)"
        main.style.backgroundColor = "black"
    }

})