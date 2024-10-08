"use strict";

const botonesComprar = document.querySelectorAll('.botonComprar');
let comprado = 'COMPRADO';
let jugar = 'JUGAR';

botonesComprar.forEach(function (botonComprar) {
    botonComprar.addEventListener("click", function () {
        if (botonComprar.textContent !== jugar) {

            botonComprar.textContent = comprado;
            botonComprar.classList.add('clickeado');

            // quita la clase para volver al estado original
            setTimeout(function () {
                botonComprar.classList.remove('clickeado');
                // cambia el contenido a "JUGAR"
                
                    botonComprar.textContent = jugar;
                }, 1500);
        }
    });
});