"use strict";
document.getElementById("burguer").addEventListener("click",ocultarMostrar);

function ocultarMostrar(){
    document.querySelector("aside").classList.toggle("open");
}
