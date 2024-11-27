"use strict";

window.addEventListener("scroll", function() {
    const logo = document.querySelector(".logo");
    if (window.scrollY > 300) {  
        logo.classList.add("logo-small");
    } else {
        logo.classList.remove("logo-small");
    }

    const header = document.querySelector('.container-header');

    if (window.scrollY > 300) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    const scrollY = window.scrollY;

    
  
    // Controla cada capa individualmente
    if(scrollY>=0 && scrollY<=270){
        document.querySelector(".layer1").style.transform = `translateY(${scrollY * 0.1}px)`;
        document.querySelector(".layer2").style.transform = `translateY(${scrollY * 0.3}px)`;
        document.querySelector(".layer3").style.transform = `translateY(${scrollY * 0.5}px)`;
        document.querySelector(".layer4").style.transform = `translateY(${scrollY * 0.55}px)`;
        document.querySelector(".layer5").style.transform = `translateY(${scrollY * 0.7}px)`;
        document.querySelector(".layer6").style.transform = `translateY(${scrollY}px)`;
    }
    

});

