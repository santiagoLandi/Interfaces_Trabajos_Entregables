window.onload = function() {
    const loadingDiv = document.getElementById('loading');
    const loadingPercentage = document.getElementById('loading-percentage');
    let percentage = 0;

    const interval = setInterval(function() {
        percentage += 1;
        loadingPercentage.textContent = percentage + '%'; 
        
        if (percentage >= 100) {
            clearInterval(interval);
            loadingDiv.style.display = 'none';
        }
    }, 50); 

    setTimeout(function() {
        clearInterval(interval);
        loadingDiv.style.display = 'none';
    }, 5000); 
};
