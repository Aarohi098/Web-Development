// Correct random number toggle: odd clicks stop, even clicks start
(function () {
    const display = document.getElementById('display');
    const toggleBtn = document.getElementById('toggleBtn');

    let clickCount = 0;
    let intervalId = null;

    function randInt() {
        const min = 1;
        const max = 9999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function startInterval() {
        if (intervalId === null) {
            intervalId = setInterval(() => {
                display.textContent = randInt();
            }, 200);
        }
    }

    function stopInterval() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // Start stopped
    display.textContent = '0';

    toggleBtn.addEventListener('click', () => {
        clickCount += 1;

        if (clickCount % 2 === 1) {
            // Odd click → stop
            stopInterval();
        } else {
            // Even click → start
            startInterval();
        }
    });
})();

