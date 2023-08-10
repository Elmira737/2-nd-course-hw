let str = 'js';
str = str.toUpperCase();
console.log(str.toUpperCase());

const arr = ['Правило', 'План', 'Производство', 'Профиль', 'Перевод'];
const search = 'про';

arr.forEach((arr) => {
    if (arr.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(arr);
    }
});

let number = 32.58884;
let roundedDown = Math.floor(number);
console.log(roundedDown);

let numb = 32.58884;
let roundedUp = Math.ceil(numb);
console.log(roundedUp);

let num = 32.58884;
let rounded = Math.round(num);
console.log(rounded);

let numbers = [52, 53, 49, 77, 21, 32];

let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);

console.log(minNumber);
console.log(maxNumber);

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

getRandomNumber();

function getRandomArrNumbers(number) {
    let array = [];
    let length = Math.floor(number / 2);

    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (number + 1)));
    }
    return array;
}

let result = getRandomArrNumbers(11);
console.log(result);

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(17, 3));

let today = new Date();
console.log(today);

let currentDate = new Date();
let futureDate = new Date();

futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate);

function formatDate(myDate) {
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] +
        " " + myDate.getFullYear() + " - это " + days[myDate.getDay()] + ". Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

    return fullDate;
}


let myDate = new Date();
let fullDate = formatDate(myDate);

console.log(fullDate);