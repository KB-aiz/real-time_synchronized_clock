const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runTheClock() {
    hrPosition += (3 / 360);
    minPosition += (6 / 60);
    secPosition += 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

    showTimeNumber(1);
}

function showTimeNumber(iterator) {
    const digitalClockBox = document.querySelector(".digitalclocknumber");

    if (sec < 59) {
        sec += iterator;
    } else if (sec === 59) {
        sec = 0;
        min += 1;
    }

    if (min === 59) {
        min = 0;
        hr += 1;
    }

    if (hr === 24) {
        hr = 0;
    }

    const formattedHour = hr < 10 ? "0" + hr : hr;
    const formattedMin = min < 10 ? "0" + min : min;
    const formattedSec = sec < 10 ? "0" + sec : sec;

    digitalClockBox.textContent = `${formattedHour}:${formattedMin}:${formattedSec}`;
}

var interval = setInterval(runTheClock, 1000);
