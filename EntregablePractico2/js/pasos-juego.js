"use strict";
let indice = 0;
let galeria = ["assets/instrucciones-juego/paso1-instrucciones.jpeg", "assets/instrucciones-juego/paso2-instrucciones.jpeg", "assets/instrucciones-juego/paso3-instrucciones.jpeg", "assets/instrucciones-juego/paso4-instrucciones.jpeg"];

let btnVolver = document.querySelector("#btn-volver");


let btnPaso1 = document.querySelector("#paso1");
let btnPaso2 = document.querySelector("#paso2");
let btnPaso3 = document.querySelector("#paso3");
let btnAjustes = document.querySelector("#ajustes");

window.addEventListener("load", mostrarImagen);



function mostrarImagen() {
    let imagen = document.querySelector("#imagen-paso");
    imagen.src = galeria[indice];
    
}



btnPaso1.addEventListener('click', function () {
        indice = 0;
        mostrarImagen();
});

btnPaso2.addEventListener('click', function () {
    indice = 1;
    mostrarImagen();
});

btnPaso3.addEventListener('click', function () {
    indice = 2;
    mostrarImagen();
});

btnAjustes.addEventListener('click', function () {
    indice = 3;
    mostrarImagen();
});


btnVolver.addEventListener('click',function(){
    window.location.href = "index.html";
})