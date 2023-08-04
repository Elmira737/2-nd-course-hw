const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] == 10) break;
}

const arr = [1, 5, 4, 10, 0, 3];
const index = arr.indexOf(4);
console.log(index);

let array = [1, 3, 5, 10, 20];
array = array.join(' ');
console.log(array);

let block = [];

for (let i = 0; i < 3; i++) {
    block[i] = [];
    for (let j = 0; j < 3; j++) {
        block[i].push(1);
    }
}

console.log(block);

let number = [1, 1, 1];
number.push(2, 2, 2);
console.log(number);

let numbers = [9, 8, 7, 'a', 6, 5];
numbers = numbers.filter(item => typeof item === 'number');
numbers = numbers.sort();
console.log(numbers);

let num = [9, 8, 7, 6, 5];
let userAnswer = prompt('Угадайте число');

if (num.includes(userAnswer)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

let word = 'abcdef';
word = word.split('');
word = word.reverse();
word = word.join('');
console.log(word);

