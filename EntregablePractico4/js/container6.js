"use strict";


document.addEventListener('DOMContentLoaded', () => {
const personaje = document.querySelector('.seis-personaje-3');
const video = document.querySelector('.container-principal-video');

const btn_play = document.querySelector("#play-video");
const imagenVideo = document.querySelector("#imagen-video");

    window.addEventListener('scroll', () => {
        if (window.scrollY < '8300' || window.scrollY > '9300') {
            
            // Volver a las posiciones iniciales si el scroll es menor
            personaje.style.right = '-639px'; // Restaurar posición inicial
            personaje.style.opacity = '0';
            video.style.left = '-806px'; // Restaurar posición inicial
            video.style.opacity = '0'; // Hacerlo invisible

            imagenVideo.style.visibility = "visible"; 
                btn_play.style.visibility = "visible";
            
        }else {
        // Cambiar posiciones cuando el scroll sea mayor a 5020px y menor a 5900
        personaje.style.right = '-89px'; // Cambiar posición de right
        video.style.left = '100px';     // Cambiar posición de left
        personaje.style.opacity = '1';
        video.style.opacity = '1';      // Hacerlo invisible
        }
        
    });

    btn_play.addEventListener("click", () => {
            imagenVideo.style.visibility = "hidden"; 
            btn_play.style.visibility = "hidden";
       
    });

});


