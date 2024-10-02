"use strict";
function ocultarMostrar(){
    document.querySelector("aside").classList.toggle("open");
}
document.getElementById("burguer").addEventListener("click",ocultarMostrar);
