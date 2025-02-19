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
        delay: 100000,
    },
    loop: true,
})

const theme = document.getElementById("lbl_theme")

theme.addEventListener("click", (e) => {
    const check_theme = document.getElementById("input_tema")
    const main = document.querySelector("main")
    const aside = document.querySelector("aside")
    const linksaside = document.querySelector(".aside_links a")

    main.classList.toggle("main-dark")
    aside.classList.toggle("aside-dark")



    if (check_theme.checked) {    //mudar para tema claro
        mudarTema("<i class='fa-solid fa-futbol'></i>", false)
    } else {     //mudar para tema escuro
        mudarTema("<i class='fa-solid fa-moon'></i>", true)
    }

    function mudarTema(icon, theme_status) {
        theme.innerHTML = icon
        check_theme.checked = theme_status
    }
})

function verificarTamanhoTela() {        //script para a versão mobile
    const btn_sidebar = document.querySelector(".nav_burguer")
    const sidebar = document.querySelector("aside")
    const linhas_burguer = document.querySelectorAll(".nav_burguer div")
    const link_aside = document.querySelectorAll("aside a")

    btn_sidebar.addEventListener("click", (e) => {
        sidebar.classList.toggle("exibir-aside")

        linhas_burguer.forEach((linha, index) => {   //para cada linha, é executado um classlist toggle
            linha.classList.toggle(`linha${index + 1}`)
        })

    })
    link_aside.forEach(link => {
        link.addEventListener("click", (e) => {
            sidebar.classList.remove("exibir-aside")
            linhas_burguer.forEach((linha, index) => {
                linha.classList.remove(`linha${index + 1}`)
            })
        })
    })
}
window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        verificarTamanhoTela();
    }
});

if (window.innerWidth < 768) {
    verificarTamanhoTela();
}
