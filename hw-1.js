let a = 20;

alert(a);

a = 10;

alert(a);

let year = 2007;

alert(year);

let creatorName = "Брендан Эйх";

alert(creatorName);

let b = 10;

let c = 2;

alert(b + c);

alert(b - c);

alert(b * c);

alert(b / c);

let d = 2;

let i = 5;

let result = d ** i;

alert(result);

let f = 9;

let g = 2;

let resalt = f % g;

alert(resalt);

let num = 1;

num += 5;

num -= 3;

num *= 7;

num /= 3;

++num;

--num;

alert(num);

let age = prompt("Сколько вам лет?");

alert(age);

let user = {
    name: 'Marcus',
    age: 30,
    isAdmin: true,
}

user.cityOfResidence = 'London';

user.age = 32;

delete user.cityOfResidence;

let info = prompt("Какую информацию хотите узнать о пользователе?");

alert(user[info]);

let userName = prompt('Введите как вас зовут?');

alert(`Привет, ${userName}!`);