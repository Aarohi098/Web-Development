window.onload = function () {
    let counter = 0;
    let appendcounter = document.getElementById("counter");
    let buttonStart = document.getElementById("start");
    let buttonStop = document.getElementById("stop");
    let buttonRestart = document.getElementById("restart");
    let interval;

    function startTimer() {
        counter++;
        appendcounter.innerHTML = counter;
    }

    buttonStart.onclick = function () {
        clearInterval(interval)
        interval = setInterval(startTimer, 1000);
    }

    buttonStop.onclick = function () {
        clearInterval(interval);
    }

    buttonRestart.onclick = function () {
        clearInterval(interval);
        counter = 0;
        appendcounter.innerHTML = "0";
    }
}
