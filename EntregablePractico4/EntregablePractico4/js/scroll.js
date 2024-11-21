"use strict";
window.addEventListener("scroll", function() {
    const logo = document.querySelector(".logo");
    if (window.scrollY > 300) {  
        logo.classList.add("logo-small");
    } else {
        logo.classList.remove("logo-small");
    }
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.container-header');

    if (window.scrollY > 300) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    // Controla cada capa individualmente

    document.querySelector(".layer1").style.transform = `translateY(${scrollY * 0.1}px)`;
    document.querySelector(".layer2").style.transform = `translateY(${scrollY * 0.3}px)`;
    document.querySelector(".layer3").style.transform = `translateY(${scrollY * 0.4}px)`;
    document.querySelector(".layer4").style.transform = `translateY(${scrollY * 0.6}px)`;
    document.querySelector(".layer5").style.transform = `translateY(${scrollY * 0.8}px)`;
    document.querySelector(".layer6").style.transform = `translateY(${scrollY}px)`;
    // document.querySelector(".titulo-seis").style.transform = `translateY(${scrollY * 0.02}px)`;
    // document.querySelector(".contenedor-video").style.transform = `translateY(${scrollY * 0.04}px)`;
    // document.querySelector(".personaje-3-container6").style.transform = `translateY(${scrollY * 0.06}px)`;

});

document.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    console.log("el valor en y es",scrollY);
    const personajes = document.getElementById('personajes');
    const velocidadPersonajes = 0.175;

    if(scrollY >= 2500 && scrollY <= 3700){

        
        const desplazamientoRelativo = scrollY - 3300;//use 3500 xq si pongo el topY de 2500 la img me queda mas arriba al cargar el sitio
        const transformValue = `translateY(${-desplazamientoRelativo * velocidadPersonajes}px)`;
        
        
        // personajes.style.transform = transformValue;
    }
});
