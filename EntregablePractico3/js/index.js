"use strict";

const botonesComprar = document.querySelectorAll('.botonComprar');
let comprado = 'COMPRADO';
let jugar = 'JUGAR';
let btn4EnLinea = document.querySelector("#btn-jugar-4-en-linea");

botonesComprar.forEach(function (botonComprar) {
    botonComprar.addEventListener("click", function () {
        if (botonComprar.textContent !== jugar) {

            botonComprar.textContent = comprado;
            botonComprar.classList.add('clickeado');

            // quita la clase para volver al estado original
            setTimeout(function () {
                botonComprar.classList.remove('clickeado');

                botonComprar.textContent = jugar;

                // Muestra el ribbon de "Comprado"
                const ribbon = botonComprar.closest('.card').querySelector('.ribbon');
                ribbon.style.display = 'block'; 
            }, 1500);
        }
    });
});


btn4EnLinea.addEventListener('click',function(){
    window.location.href = "juego-4-en-linea.html";});

