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

let newArray = [[1, 2, 3,], [4, 5, 6]];
let result = [].concat(...newArray);
console.log(result);

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < newArr.length - 1; i++) {
    let sum = newArr[i] + newArr[i + 1];
    console.log(sum);
}

const numb = [3, 5, 7, 9, 11];
let newResult = numb.map(item => (item ** 2));
console.log(newResult);

function getLengthWords(arr) {
    return arr.map(word => word.length);
}

let words = ['hello', 'world', '', 'you are welcome', 'to be a nice person'];
let lengthWords = getLengthWords(words);
console.log(lengthWords);

function filterPositive(array) {
    return array.filter(num => num < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));