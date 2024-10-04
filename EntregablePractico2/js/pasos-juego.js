"use strict";
let indice = 0;
let galeria = ["assets/imagenes/paso1-instrucciones.jpeg", "assets/imagenes/paso2-instrucciones.jpeg", "assets/imagenes/paso3-instrucciones.jpeg", "assets/imagenes/paso4-instrucciones.jpeg"];
window.addEventListener("load", mostrarImagen);


function mostrarImagen() {
    let imagen = document.querySelector("#imagen-paso");
    imagen.src = galeria[indice];
    
}


let btnDer = document.querySelector("#der").addEventListener('click', function () {
    if (indice < galeria.length - 1) {
        indice++;
        mostrarImagen();
    }
});
let btnIzq = document.querySelector("#izq").addEventListener('click', function () {
    if (indice > 0) {
        indice--;
        mostrarImagen();
    }
});