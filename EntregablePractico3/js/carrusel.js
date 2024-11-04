"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".carousel-track");
  const cardWidth = document.querySelector(".card").offsetWidth + 20; // Incluye el margen
  const containerWidth = document.querySelector('.carousel-container').offsetWidth;

  const btnAnterior = document.querySelector(".left-arrow");
  const btnSiguiente = document.querySelector(".right-arrow");

  // Calcula cuántas tarjetas caben en la pantalla
  const visibleCards = Math.floor(containerWidth / cardWidth);
  let Index = 0; // Índice de la tarjeta visible actual

  // Evento para la flecha izquierda
  btnAnterior.addEventListener("click", () => {
    if (Index > 0) {
      Index--;
      updateSliderPosition();
    }
  });

  // Evento para la flecha derecha
  btnSiguiente.addEventListener("click", () => {
    const totalCards = cardsContainer.children.length;
    if (Index < totalCards - visibleCards) {
      Index++;
      updateSliderPosition();
    }
  });

  // Actualiza la posición del carrusel
  function updateSliderPosition() {
    const translateX = -Index * cardWidth;
    cardsContainer.style.transform = `translateX(${translateX}px)`;
  }
});
