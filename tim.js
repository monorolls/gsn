  function updateClock() {
            const now = new Date();
            document.getElementById('currentYear').textContent = now.getFullYear();
            const options = { 
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit' 
            };
            document.getElementById('liveClock').textContent = now.toLocaleDateString('en-US', options);
        }
        setInterval(updateClock, 1000);
        updateClock();
