"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const loadingProgress = document.getElementById("loading-progress");
  const progressBar = document.getElementById("progress-bar");

  let percentage = 0;

  const updatePercentage = () => {
    loadingProgress.textContent = percentage + "%"; // Actualiza el texto del porcentaje
    progressBar.style.width = percentage + "%"; // Ajusta el ancho de la barra
  };

  const incrementPercentage = () => {
    if (percentage < 100) {
      percentage += 1;
      updatePercentage();
      setTimeout(incrementPercentage, 50); // Controla la velocidad
    } else {
      // Aseguramos que el porcentaje y la barra llegan al 100%
      percentage = 100;
      updatePercentage();
      setTimeout(function () {
        document.querySelector(".container-pagina").style.display = "block";
        document.querySelector("#loader-container").style.display = "none";
      }, 300); // Pequeño retraso para apreciar la barra llena
    }
  };

  // Inicia la simulación
  incrementPercentage();
});


