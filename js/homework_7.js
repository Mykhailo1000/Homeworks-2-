//!Task 1

let timeInMinutes = 60;

const timerDisplay = document.getElementById("time");

const timer = setInterval(() => {
    if (timeInMinutes === 30) {
        alert("Залишилось менше половини часу!");
    }

    if (timeInMinutes < 0) {
        clearInterval(timer);
        return;
    }

    const minutes = Math.floor(timeInMinutes);
    const seconds = Math.floor((timeInMinutes - minutes) * 60);
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeInMinutes -= 1 / 60;
}, 1000);

//! Task 2

let timeInSeconds = 30;

const timerDisplay2 = document.getElementById("time2");
const restartBtn = document.getElementById("restartBtn");

const timer2 = setInterval(() => {
    if (timeInSeconds === 10) {
        document.body.style.backgroundColor = "lightblue";
    }

    if (timeInSeconds < 0) {
        clearInterval(timer2);
        restartBtn.disabled = false; 
        return;
    }

    timerDisplay2.textContent = timeInSeconds;
    timeInSeconds -= 1; 
}, 1000);
