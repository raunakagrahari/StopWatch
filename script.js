const minuteLable = document.getElementById("minutes");
const secondsLable = document.getElementById("seconds");
const milisecondsLable = document.getElementById("miliseconds");

const startButton = document.getElementById("startbtn");
const stopButton = document.getElementById("stopbtn");
const pauseButton = document.getElementById("pausebtn");
const resetButton = document.getElementById("resetbtn");

let lapList = document.getElementById("laplist");

let minutes = 0,
  seconds = 0,
  miliseconds = 0,
  interval;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(updateTimer, 10);
  updateTimer();
  startButton.disabled = true;
}

function stopTimer() {
    // clearInterval(interval);
    addToLapList()
    // resetTimerData()
    startButton.disabled = false;

}

function pauseTimer() {
    clearInterval(interval)
    startButton.disabled = false;

}

function resetTimer() {
    clearInterval(interval);
    resetTimerData()
    lapList.innerHTML = ''
    startButton.disabled = false;
}

function updateTimer() {
  miliseconds++;
  if (miliseconds === 100) {
    miliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  displayTimer();
}

function displayTimer() {
  milisecondsLable.textContent = padTime(miliseconds);
  secondsLable.textContent = padTime(seconds);
  minuteLable.textContent = padTime(minutes);
}

function padTime(time) {
  return time.toString().padStart(2, '0');
}

function resetTimerData(){
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTimer()
}

function addToLapList() {
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(miliseconds)}`;
    const listItem = document.createElement('li')
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: ${lapTime}</span> `
    lapList.append(listItem);
}