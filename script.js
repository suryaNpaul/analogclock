const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval( ()=> {
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();

    let hourRotation = 30 * hr + mn / 2;
    let minRotate = 6 * mn;
    let secRotate = 6 * sc;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minRotate}deg)`;
    sec.style.transform = `rotate(${secRotate}deg)`;
}, 1000);
