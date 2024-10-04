let timerDisplay = document.getElementById('timerDisplay');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let msec = 0;
let secs = 0;
let min = 0;
let timerId = null;

start.addEventListener('click', function() {
    if (timerId != null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stop.addEventListener('click', function() {
    clearInterval(timerId);
});

reset.addEventListener('click', function() {
    clearInterval(timerId);
    timerDisplay.innerHTML = '00:00:00:000';
    msec = 0;
    secs = 0;
    min = 0;
});

function startTimer() {
    msec++;
    if (msec >= 100) {
        msec = 0;
        secs++;
    }
    if (secs >= 60) {
        secs = 0;
        min++;
    }
    let msecString = (msec < 10 ? '0' : '') + msec;
    let secsString = (secs < 10 ? '0' : '') + secs;
    let minString = (min < 10 ? '0' : '') + min;
    timerDisplay.innerHTML = `${minString}:${secsString}:${msecString}`;
}

 