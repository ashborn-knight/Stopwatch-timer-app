const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('miniseconds');

const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

const lapList = document.getElementById('lapList');


///stopwatch variables

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
pauseButton.addEventListener('click',pauseTimer);
resetButton.addEventListener('click',resetTimer);


function startTimer(){

}
function stopTimer(){

}
function pauseTimer(){

}
function resetTimer(){

}
function updateTimer(){
    milliseconds++
    if(milliseconds ===100){
        milliseconds = 0;
        seconds++;
    }
}
