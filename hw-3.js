let i = 0;

while (i < 2) {
    console.log('Привет');
    i++;
}

let n = 1;

while (n < 6) {
    console.log(n);
    n++;
}

let f = 7;

while (f < 23) {
    console.log(f);
    f++;
}

let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
};

for (let salary in obj) {
    console.log(`${salary} - зарплата ${obj[salary]} долларов`);
}

n = 1000;
num = 0;

while (n > 50) {
    n /= 2;
    num++;
}

console.log(n);
console.log(num);