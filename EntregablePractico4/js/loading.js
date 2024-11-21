"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const loadingProgress = document.getElementById("loading-progress");

  let percentage = 0;
  const updatePercentage = () => {
    loadingProgress.textContent = percentage + "%";
  };

  const incrementPercentage = () => {
    if (percentage < 100) {
      percentage += 1;
      updatePercentage();
      setTimeout(incrementPercentage, 50);
    } else {
      setTimeout(function () {
        document.querySelector(".container-pagina").style.display = "block";
        document.querySelector("#loader-container").style.display = "none";
      }, 60);
    }
  };

  // Inicia la simulación
  incrementPercentage();
});

