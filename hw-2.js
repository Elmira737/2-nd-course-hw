let password = 'aircraft';
let result = prompt('Введите пароль');

if (password == result) {
alert('Пароль введен верно');
} else {
alert('Пароль введен неправильно');
}

let c = 7;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = 35;
let e = 11;

(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '1-й месяц':
        console.log('Зима');
        break;
    case '2-й месяц':
        console.log('Зима');
        break;
    case '3-й месяц':
        console.log('Весна');
        break;
    case '4-й месяц':
        console.log('Весна');
        break;
    case '5-й месяц':
        console.log('Весна');
        break;
    case '6-й месяц':
        console.log('Лето');
        break;
    case '7-й месяц':
        console.log('Лето');
        break;
    case '8-й месяц':
        console.log('Лето');
        break;
    case '9-й месяц':
        console.log('Осень');
        break;
    case '10-й месяц':
        console.log('Осень');
        break;
    case '11-й месяц':
        console.log('Осень');
        break;
    case '12-й месяц':
        console.log('Зима');
        break;
    default: console.log('Такого месяца не существует');
        break;
}