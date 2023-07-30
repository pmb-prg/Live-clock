const hours = document.getElementById("hour");
const mine = document.getElementById("min");
const seco = document.getElementById("sec");
const am = document.getElementById("am");

setInterval(now, 1000);

function now() {
    const date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    if (h > 12) {
        h = h - 12;
        am.innerText = "PM"
    }
    if (h === 0) {
        h = 12;
    }
    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    hours.innerText = h;
    mine.innerText = m;
    seco.innerText = s;



}