const hourHand = document.getElementById('hour-hand');
const minHand = document.getElementById('minute-hand');
const secHand = document.getElementById('second-hand');
const digitalClock = document.querySelector('.digital-clock-time');

/**
 * It calculates the hours, minutes and seconds in terms of degrees and continually sync the analog clock.
 * 
 * @param {any} hour - current hour of time
 * @param {any} mins - current minute of time 
 * @param {any} sec - current second of time
 */
function syncAnalogClock(hour, mins, sec) {
    let hourInDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    let minsInDegrees = ((mins / 60) * 360) + ((sec/60)*6) + 90;
    let secInDegrees = ((sec / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hourInDegrees}deg)`;
    minHand.style.transform = `rotate(${minsInDegrees}deg)`;
    secHand.style.transform = `rotate(${secInDegrees}deg)`;
}

/**
 * It continually sync the digital clock.
 * 
 * @param {any} hour - current hour of time
 * @param {any} mins - current minute of time 
 * @param {any} sec  - current second of time
 */
function syncDigitalClock(hour, mins, sec) {
    digitalClock.innerHTML = `${hour}:${mins}:${sec}`;
}

/**
 * It is called every time through 'setInterval' function and updates time.
 * 
 */
function updateTime() {
    let now = new Date();
    let hour = now.getHours();
    let mins = now.getMinutes();
    let sec = now.getSeconds();
    
    syncAnalogClock(hour, mins, sec);
    syncDigitalClock(hour, mins, sec);
}

setInterval(updateTime, 1000);