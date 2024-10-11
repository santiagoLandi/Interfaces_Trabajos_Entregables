/*
document.addEventListener("DOMContentLoaded", function() {
    // Muestra el loader durante 15 segundos
    setTimeout(function() {
        const loadingElement = document.getElementById("loading");
        loadingElement.style.display = "none"; // Oculta la ventana de loading
    }, 5000); 
});
*/
window.onload = function() {
    // Espera 15 segundos y luego oculta el loader
    setTimeout(function() {
        const loadingDiv = document.getElementById('loading');
        loadingDiv.style.display = 'none'; // Oculta el loader
    }, 5000); // 15000 ms = 15 segundos
};