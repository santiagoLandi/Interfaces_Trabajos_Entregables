"use strict";

let indice = 0;

//Imagenes del carrousel de instrucciones
let galeria = ["assets/instrucciones-juego/paso1-instrucciones.jpeg", "assets/instrucciones-juego/paso2-instrucciones.jpeg", "assets/instrucciones-juego/paso3-instrucciones.jpeg", "assets/instrucciones-juego/paso4-instrucciones.jpeg"];

//Se coloca el boton volver en una variable
let btnVolver = document.querySelector("#btn-volver");

//Se colocan los botones de los pasos en variables
let btnPaso1 = document.querySelector("#paso1");
let btnPaso2 = document.querySelector("#paso2");
let btnPaso3 = document.querySelector("#paso3");
let btnAjustes = document.querySelector("#ajustes");

//Ejecuta la funcion mostrar imagen
window.addEventListener("load", mostrarImagen);



function mostrarImagen() {
    let imagen = document.querySelector("#imagen-paso");
    imagen.src = galeria[indice];
    
}


//Funciones de cada boton para ver las imagenes
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