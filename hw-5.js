// Задание 1 

// const compare = (a, b) => {
//     if (a >= b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// numberOne = Number(prompt('Первое число'));
// numberTwo = Number(prompt('Второе число'));

// console.log(`возвращаю число ${compare(numberOne, numberTwo)}`);

// Задание 2 

// const modulus = (a) => {
//     if (a % 2 == 0) {
//         console.log('число четное');
//     } else {
//         console.log('число нечетное');
//     }
// }

// x = Number(prompt('введите число'));
// modulus(x);

// Задание 3.1

// const squaring1 = (a) => {
//     console.log(a**2);
// }

// y = Number(prompt('введите число'));
// squaring1(y);

// Задание 3.2 

// const squaring2 = (a) => {
//     return a**2;
// }

// z = Number(prompt('введите число'));
// console.log(squaring2(z));

// Задание 4 

// const ageQuestion = (a) => {
//     a = Number(prompt('Сколько тебе лет?'));
//     if (a < 0) {
//         alert('ты что Бенджамин Баттон?');
//     } else if (a > 13) {
//         alert('Добро пожаловать');
//     }
//     else {
//         alert('Привет, друг!');
//     }
// }

// ageQuestion();

// Задание 5 

// const numberCheck = (a, b) => {
//     if (isNaN(a) || isNaN(b) === true ) {
//         alert('Одно или оба значения не являются числом');
//     } else {
//         return a * b;
//     }
// }

// firstNumber = prompt('введите первое число');
// secondNumber = prompt('введите второе число');

// multiple = numberCheck(firstNumber, secondNumber);
// console.log(multiple);

// Задание 6 

// const cubing = (a) => {
//     a = prompt('введите число')

//     if (isNaN(a) === true ) {
//         alert('Переданный параметр не является числом');
//     } else {
//         return alert(`${a} в кубе равняется ${a**3}`);
//     }
// }

// cubing();

// Задание 7 

const firstGame = (a) => {
    a = prompt('Введите любой номер месяца, а я вам скажу какое это время года')

    if (a >= 1 && a <= 2 || a == 12) {
        alert('это зимний месяц')
    } else if (a >= 3 && a <= 5) {
        alert('это весенний месяц')
    } else if (a >= 6 && a <= 8) {
        alert('это летний месяц')
    } else if (a >= 9 && a <= 11) {
        alert('это осенний месяц')
    } else if (isNaN(a) === true) {
        alert('хммм, это вообще не число, давай еще разок')
    } else {
        alert('такого месяца не бывает')
    }
}

let a = 12;
console.log((a >= 1 && a <= 2) || a === 12);