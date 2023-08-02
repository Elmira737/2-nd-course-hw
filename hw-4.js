function min(a, b) {

    if (a < b) {
        return a;
    } else {
        return b;
    }
}

min(8, 4);

"use strict";
let n = prompt("Введите число!");
let printAnswer;

if (n % 2 == 0) {
    printAnswer = function () {
        console.log("Число четное");
    }

} else {

    printAnswer = function () {
        console.log("Число нечетное");
    }

}

printAnswer();

function calc(a) {
    let square = a * a;
    console.log(square);
}

calc(7);

function calc(b) {
    return b * b;
}

let resalt = calc(10);

console.log(resalt);

let age = prompt("Сколько вам лет?");
let printMessage;

if (age < 0) {
    printMessage = function () {
        console.log('Вы ввели неправильное значение');
    }
} else if (age >= 13) {
    printMessage = function () {
        console.log('Добро пожаловать!');
    }
} else {
    printMessage = function () {
        console.log('Привет, друг!');
    }
}

printMessage();

function num(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return Number(a) * Number(b);
    }
}

function inputValue() {
    let userAnswer = prompt("Введите число")
    if (isNaN(userAnswer)) {
        return 'Переданный параметр не является числом';
    }

    let cube = userAnswer ** 3
    return `${userAnswer} в кубе равняется ${cube}`;
}

console.log(inputValue());

function getCircleArea() {
    return Math.PI * this.radius ** 2;
}

function getCirclePerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 7,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 3,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());