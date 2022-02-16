"use strict";

// 1
const dateBirth = new Date(1984, 7, 3);
let day = dateBirth.getDate();
if (day < 10) {
    day = "0" + day; 
};
let month = dateBirth.getMonth() + 1;
if (month < 10) {
    month = "0" + month; 
};
let year = dateBirth.getFullYear();

console.log(`${day}.${month}.${year}`);

// 2

const getDiffDays = (dateStart, dateEnd) => {
    const start = new Date(dateStart);
    const end = new Date(dateEnd);

    if (start == 'Invalid Date' || end == 'Invalid Date') {
        console.error('Error: invalid date!!!!!');
        return;
    };

    if (start > end) {
        console.error('Error: your start date is later than end');
        return;
    };
    
    const DAYS_IN_MILLISECONDS = 1000 * 3600 * 24;
    let diffDays = ((+end) - (+start)) / DAYS_IN_MILLISECONDS;
    return diffDays;
};

console.log(getDiffDays('2020-01-01', '2020-01-17'));
console.log(getDiffDays('2020-01-01', '2020-03-15')); 
console.log(getDiffDays('2222222222', '2020-03-15'));
console.log(getDiffDays('2021-01-02', '2020-03-15'));

// 3
const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return (day === 0 || day === 6);
};

console.log(isWeekend('2022-02-12'));
console.log(isWeekend('2022-02-13')); 
console.log(isWeekend('2022-02-09')); 

// 4
const person = {
    fullName: 'Sherlock Holmes',
    address: {
        street: "Baker Street",
        city: "London",
        house: "221b"
    }
}

const jsonPerson = JSON.stringify(person);
const newPerson = JSON.parse(jsonPerson);
const {fullName, address: {street, city, house}} = person;
console.log(jsonPerson);
console.log(newPerson);
console.log(fullName, street, city, house);