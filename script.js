const deg = 6;
const hour= document.querySelector(".hour");
const min= document.querySelector(".min");
const sec= document.querySelector(".sec");

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;


    hour.style.tansform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.tansform = `rotateZ(${mm}deg)`;
    sec.style.tansform = `rotateZ(${ss}deg)`;
};


setClock();
setInterval(setClock, 1000);