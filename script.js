//moment.js
const clock = document.getElementById('currentTime');
const currentDate = document.getElementById('currentDate')

setInterval(function() {
    const date = moment().format('dddd, MMMM Do YYYY,')
    const time = moment().format("hh:mmA");
    currentDate.textContent = date;
    clock.textContent = time;
}, 1000)