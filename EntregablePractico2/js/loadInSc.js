"use strict"
let btnIsesion=document.getElementById("btn-iniciar");
let loadContainer=document.getElementById("loading-container");
const loadingContainer = document.getElementById("loading-container");
const loadingProgress = document.getElementById("loading-progress");

function showLoading() {
    loadingContainer.style.display = 'block';
    }
    
    function simulateLoading() {
        let progress = 0;
        let interval = setInterval(function() {
        progress += 10;
        document.getElementById('loading-progress').textContent = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            window.location.href = "index.html";
        }
    }, 500); 
    }; 
    
    btnIsesion.addEventListener('click', function (event) {
        event.preventDefault();
        showLoading();
        simulateLoading();
    });
    
    
    