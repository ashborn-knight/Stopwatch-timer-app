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

    interval = setInterval(updateTimer,10);
    startButton.disabled= true;

  

}
function stopTimer(){

    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startButton.disabled = false;

}
function pauseTimer(){
    clearInterval(interval);
    pauseButton.disabled= false;

}
function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    startButton.disabled = false;


}
function updateTimer(){
    milliseconds++
    if(milliseconds === 100){ ////1000 1seconds= 1000millisecondds
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();
}

function displayTimer(){
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTimer(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function padTimer(time){
    return time.toString().padStart(2,'0');

}
function resetTimerData(){
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    displayTimer();
}
function addToLapList(){
    const lapTime = ${padTime(mintues)}; ${padTime(seconds)}:${padTime(milliseconds)};
    const listItem = document.createElement('li');
    listitem.innnerHTML = <span>Lap ${lapList.childElementCount + 1}: </span>$
    {lapTime};
    lapList.appendChild(listItem)
}