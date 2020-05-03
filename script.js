//variables
const btn = document.querySelector('.container');
const text = document.querySelector('.input');
let time = moment().format("hh:mmA");

//event listener
btn.addEventListener("click", toDo);

function toDo() {
    console.log('do something')
}

//moment.js
const clock = document.getElementById('currentTime');
const currentDate = document.getElementById('currentDate')

setInterval(function() {
    const date = moment().format('dddd, MMMM Do YYYY,')
    currentDate.textContent = date;
    clock.textContent = time;
}, 1000)

//row Variables
const row9 = document.querySelector('#row9')
const row10 = document.querySelector('#row10')
const row11 = document.querySelector('#row11')
const row12 = document.querySelector('#row12')
const row1 = document.querySelector('#row1')    
const row2 = document.querySelector('#row2')
const row3 = document.querySelector('#row3')
const row4 = document.querySelector('#row4')
const row5 = document.querySelector('#row5')

//Time Frame colors nested if statements
//is there a more practical way to get the same result?
if (moment()>= moment("09:00AM", "hh:mmA")) { 
    row9.classList.toggle('future');
    row9.classList.add('present');
        if (moment() >= moment("10:00AM", "hh:mmA")) {
            row9.classList.toggle('present');
            row9.classList.add('past');
            row10.classList.toggle('future');
            row10.classList.add('present');
                if(moment() >= moment("11:00AM", "hh:mmA")) {
                    row10.classList.toggle('present');
                    row10.classList.add('past');
                    row11.classList.toggle('future');
                    row11.classList.add('present');
                        if (moment() >= moment("12:00AM", "hh:mmA")) {
                            row11.classList.toggle('present');
                            row11.classList.add('past');
                            row12.classList.toggle('future');
                            row12.classList.add('present');
                                if (moment() >= moment("01:00PM", "hh:mmA")) {
                                    row12.classList.toggle('present');
                                    row12.classList.add('past');
                                    row1.classList.toggle('future');
                                    row1.classList.add('present');
                                        if (moment() >= moment("02:00PM", "hh:mmA")) {
                                            row1.classList.toggle('present');
                                            row1.classList.add('past');
                                            row2.classList.toggle('future');
                                            row2.classList.add('present');
                                                if (moment() >= moment("03:00PM", "hh:mmA")) {
                                                    row2.classList.toggle('present');
                                                    row2.classList.add('past');
                                                    row3.classList.toggle('future');
                                                    row3.classList.add('present');
                                                    if (moment() >= moment("04:00PM", "hh:mmA")) {
                                                        row3.classList.toggle('present');
                                                        row3.classList.add('past');
                                                        row4.classList.toggle('future');
                                                        row4.classList.add('present');
                                                            if (moment() >= moment("05:00PM", "hh:mmA")) {
                                                                row4.classList.toggle('present');
                                                                row4.classList.add('past');
                                                                row5.classList.toggle('future');
                                                                row5.classList.add('present');
                                                                    if (moment() >= moment("06:00PM", "hh:mmA")) {
                                                                        row5.classList.toggle('present');
                                                                        row5.classList.add('past');
                                                                }
                                                            }
                                                    }
                                                }
                                        }
                                }
                        }
                }
        }
}