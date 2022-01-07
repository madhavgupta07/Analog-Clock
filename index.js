const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");


setInterval(() =>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let hrotation = (30 * hours) + (minutes/2);
    let mrotation = 6*minutes;
    let srotation = 6*seconds;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);