// project.js

let timer;
let isRunning = false;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCounter = 1;

// Start or stop the stopwatch
function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 10);
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

// Reset the stopwatch
function reset() {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('milliseconds').textContent = '00';
    document.getElementById('startStop').textContent = 'Start';
    lapCounter = 1;
    document.getElementById('lapList').innerHTML = '';
}

// Update the stopwatch time
function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('milliseconds').textContent = formatTime(milliseconds);
}

// Format time with leading zeros
function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

// Record a lap
function recordLap() {
    if (isRunning) {
        const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
        const lapList = document.getElementById('lapList');
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        lapList.appendChild(lapItem);
        lapCounter++;
    }
}
