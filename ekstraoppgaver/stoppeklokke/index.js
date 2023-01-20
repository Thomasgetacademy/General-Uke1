var seconds = 58;
var minutes = 59;
var hours = 0;
var lapArray = [];
var currentLap = 1;
var isInterval = false;

function startWatch() {
    if (isInterval === false) {
        clockTimer = setInterval(function () {
            document.getElementById("timeLabel").innerHTML = checkTime();
            seconds++;
            isInterval = true;
        }, 1000);
    }
    
}

function checkTime() {
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++
            return `${hours}:${minutes}:${seconds}`;
        }
        return `${hours}:${minutes}:${seconds}`;
    } else {
        return `${hours}:${minutes}:${seconds}`;
    }
}

function lapTimer() {
    const currentTime = document.getElementById("timeLabel").innerHTML;
    var lapLabel = document.getElementById("lapLabel");
    lapArray.push(currentTime);
    console.log(lapArray);
    lapLabel.innerHTML += `<pre>Lap: ${currentLap}       Time: ${lapArray[currentLap - 1]}</pre> <br>`;
    currentLap++;
}

function stopWatch() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapArray = [];
    lapLabel.innerHTML = lapArray;
    document.getElementById("timeLabel").innerHTML = "0:0:0";
    clearInterval(clockTimer);
}