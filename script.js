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

function verificarTamanhoTela(){        //script para a versão mobile
    if(window.innerWidth < 768){
        const btn_sidebar = document.querySelector(".nav_burguer")
        
        btn_sidebar.addEventListener("click", (e)=>{
            const sidebar = document.querySelector("aside")
        
            const linha1 = document.querySelector(".nav_burguer div:nth-child(1)")
            const linha2 = document.querySelector(".nav_burguer div:nth-child(2)")
            const linha3 = document.querySelector(".nav_burguer div:nth-child(3)")
        
            linha1.classList.toggle("linha1")
            linha2.classList.toggle("linha2")
            linha3.classList.toggle("linha3")
        
            sidebar.classList.toggle("exibir-aside")
            if(sidebar.classList.contains("exibir-aside")){
                const links_aside = document.querySelectorAll("aside a")

                links_aside.forEach(links =>{
                    links.addEventListener("click", (e) =>{
                        sidebar.classList.remove("exibir-aside")
                    })
                })
            }
        })

    }
}
verificarTamanhoTela()
