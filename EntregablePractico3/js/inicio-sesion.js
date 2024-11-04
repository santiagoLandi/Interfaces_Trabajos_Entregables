"use strict";

//Coloco los botones en variables
let btn_iniciar_sesion = document.querySelector("#btn-iniciar-sesion");

let btn_iniciar_sesion_google = document.querySelector("#btn-iniciar-sesion-google");

let btn_iniciar_sesion_facebook = document.querySelector("#btn-iniciar-sesion-facebook");

let btn_iniciar_sesion_registrate = document.querySelector("#btn-iniciar-sesion-registrate");


//Funciones de cada boton para ir a la pagina que le corresponde
btn_iniciar_sesion_google.addEventListener('click', irAlHome);

btn_iniciar_sesion_facebook.addEventListener('click', irAlHome);

btn_iniciar_sesion.addEventListener('click', function(){
    window.location.href = "inicio-sesion-cuenta.html";});

btn_iniciar_sesion_registrate.addEventListener('click',function(){
    window.location.href = "registro.html";
});


function irAlHome(){
    window.location.href = "index.html";
}


