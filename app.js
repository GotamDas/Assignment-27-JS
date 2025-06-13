// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let intervalId;

// const startBtn = document.getElementById('start-btn');
// const stopBtn = document.getElementById('stop-btn');
// const resetBtn = document.getElementById('reset-btn');

// const hoursDisplay = document.getElementById('hours');
// const minutesDisplay = document.getElementById('minutes');
// const secondsDisplay = document.getElementById('seconds');

// startBtn.addEventListener('click', startStopwatch);
// stopBtn.addEventListener('click', stopStopwatch);
// resetBtn.addEventListener('click', resetStopwatch);

// function startStopwatch() {
//     intervalId = setInterval(() => {
//         seconds++;
//         if (seconds === 60) {
//             minutes++;
//             seconds = 0;
//         }
//         if (minutes === 60) {
//             hours++;
//             minutes = 0;
//         }
//         updateDisplay();
//     } , 1000);
//     startBtn.disabled = true;
//     stopBtn.disabled = false;
// }
// function stopStopwatch() {
//     clearInterval(intervalId);
//     startBtn.disabled = false;
//     stopBtn.disabled = true;
// }
// function resetStopwatch(){
//     clearInterval(intervalId);
//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//     updateDisplay();
//     startBtn.disabled = false;
//     stopBtn.disabled = true;
// }
// function updateDisplay() {
//     hoursDisplay.textContent = String(hours).padStart(2, '0');
//     minutesDisplay.textContent = String(minutes).padStart(2, '0');
//     secondsDisplay.textContent = String(seconds).padStart(2, '0');
// }