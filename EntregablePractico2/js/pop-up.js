"use strict";

/* HEADER */
// Usuario
document.querySelector("#usuario").addEventListener('click', function(){
    document.getElementById('popup-compras').style.display = 'none';
    document.getElementById('popup-login').style.display = 'block';
    document.body.classList.add("popup-open");
});

document.querySelector("#btn-cerrar-popup-login").addEventListener('click', function(){
document.getElementById('popup-login').style.display = 'none';
document.body.classList.remove("popup-open");
});

// Compras
document.querySelector("#pop-bolsa").addEventListener('click', function () {
    document.getElementById('popup-login').style.display = 'none';
    document.getElementById('popup-compras').style.display = 'block';
    document.body.classList.add("popup-open");
  });

document.getElementById('btn-cerrar-popup-compras').addEventListener('click', function () {
    document.getElementById('popup-compras').style.display = 'none';
    document.body.classList.remove("popup-open");
});
