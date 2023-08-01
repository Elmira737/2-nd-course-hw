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

