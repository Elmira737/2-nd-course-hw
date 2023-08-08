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