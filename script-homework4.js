// Задание 1 

// for (let i = 0; i < 2; i++) {
//     console.log('Hello');
// }

// Задание 2

// for (let a = 0; a < 5; a++) {
//     console.log(a+1);
// }

// Задание 3

// let b = 7;

// while (b <= 22) {
//     console.log(b);
//     b++;
// }

// Задание 4

// const obj = {
//     'Коля': 200,
//     'Вася': 300,
//     'Петя': 400,
// }

// for (let name in obj) {
//     console.log(`${name} - зарплата ${obj[name]} долларов`);
// }

// Задание 5 

let firstFriday;

do {
    firstFriday = Number(prompt('Введите число первой пятницы недели'))
} while (firstFriday < 1 || firstFriday > 7);

let friday = firstFriday;

while (friday < 31) {
    console.log(`Сегодня пятница,${friday}-е число. Необходимо подготовить отчет.`);
    friday += 7;
}