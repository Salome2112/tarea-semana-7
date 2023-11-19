'use strict'
function calculateAge(year){
    let currentyear = 2023;
    let age =currentyear - year;
    alert(age);
}
let yearofbirth = Number(prompt("ingrese year of birth"));
calculateAge(yearofbirth);