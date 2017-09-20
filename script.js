function syncDate() {
    const hourHand = document.getElementById('hour-hand');
    const minHand = document.getElementById('minute-hand');
    const secHand = document.getElementById('second-hand');
    const digitalClock = document.querySelector('.digital-clock-time');

    let now = new Date();
    let hour = now.getHours();
    let mins = now.getMinutes();
    let sec = now.getSeconds();
    
    let hourInDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    let minsInDegrees = ((mins / 60) * 360) + ((sec/60)*6) + 90;
    let secInDegrees = ((sec / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hourInDegrees}deg)`;
    minHand.style.transform = `rotate(${minsInDegrees}deg)`;
    secHand.style.transform = `rotate(${secInDegrees}deg)`;

    digitalClock.innerHTML = `${hour}:${mins}:${sec}`;
}

setInterval(syncDate, 1000);