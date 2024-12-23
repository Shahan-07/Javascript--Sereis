const hourEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock(){
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
    setTimeout(updateClock, 1000);
}

updateClock();