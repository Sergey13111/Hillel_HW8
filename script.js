"use strict";

// 1
// const dateBirth = new Date(1984, 7, 3);
// let day = dateBirth.getDate();
// if (day < 10) {
//     day = "0" + day; 
// };
// let month = dateBirth.getMonth() + 1;
// if (month < 10) {
//     month = "0" + month; 
// };
// let year = dateBirth.getFullYear();

// console.log(`${day}.${month}.${year}`);

// 2

const getDiffDays = (dateStart, dateEnd) => {
    let start = new Date(dateStart);
    let end = new Date(dateEnd);
    console.log(start)
    if ((start || end) == 'Invalid Date') {
        
        console.error('invalid date!!!!!') 
        return;
    };
    if (start > end) {
        console.error('your start date is later than end');
        return;
    };
    let diffDays = ((+end) - (+start)) / (1000 * 3600 * 24);
    return diffDays;
};

console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
сonsole.log(getDiffDays('2222222222', '2020-03-15')); // Error: invalid date
console.log(getDiffDays('2021-01-02', '2020-03-15'));




    // let start = new Date('2222222222');
    // let end = new Date('2020-03-15');
    // if ((start || end) == 'Invalid Date') {
                
    //             console.error('invalid date!!!!!!!');
            
    //         };