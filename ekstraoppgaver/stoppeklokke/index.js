var seconds = 58;
var minutes = 59;
var hours = 0;


function startWatch() {
    setInterval(function () {
        document.getElementById("timeLabel").innerHTML = checkTime();
        seconds++
    }, 1000);
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
        console.log(hours, minutes, seconds)
        return `${hours}:${minutes}:${seconds}`;
    }
}