const menuMobile = document.querySelector(".menu-mobile-icon")

menuMobile.addEventListener('click', () =>{
    //Mostrar o menu
    const menuItens = document.querySelector('.menu-items')
    if(menuItens.classList.contains('show')){
        menuItens.classList.add('hidden')
        menuItens.classList.remove('show')
    } else {
        menuItens.classList.add('show')
        menuItens.classList.remove('hidden')
    }   
});