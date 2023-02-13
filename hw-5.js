// Задание 1 

// const compare = (a, b) => {
//     if (a >= b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// let numberOne = Number(prompt('Первое число'));
// let numberTwo = Number(prompt('Второе число'));

// console.log(`возвращаю число ${compare(numberOne, numberTwo)}`);

// Задание 2 

// const modulus = (a) => {
//     if (a % 2 == 0) {
//         console.log('число четное');
//     } else {
//         console.log('число нечетное');
//     }
// }

// let x = Number(prompt('введите число'));
// modulus(x);

// Задание 3.1

// const squaring1 = (a) => {
//     console.log(a**2);
// }

// let y = Number(prompt('введите число'));
// squaring1(y);


// Задание 3.2 

// const squaring2 = (a) => {
//     return a**2;
// }

// let z = Number(prompt('введите число'));
// console.log(squaring2(z));

// Задание 4 

// const ageQuestion = () => {
//     let a = Number(prompt('Сколько тебе лет?'));
//     if (a < 0) {
//         alert('ты что Бенджамин Баттон?');
//     } else if (a >= 13) {
//         alert('Добро пожаловать');
//     }
//     else {
//         alert('Привет, друг!');
//     }
// }

// ageQuestion();

// Задание 5 

// const numberCheck = (a, b) => {
//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return a * b;
//     }
// }

// let firstNumber = prompt('введите первое число');
// let secondNumber = prompt('введите второе число');

// let multiple = numberCheck(firstNumber, secondNumber);
// console.log(multiple);

// Задание 6 

// const cubing = () => {
//     let a = prompt('введите число')

//     if (isNaN(a)) {
//         alert('Переданный параметр не является числом');
//     } else {
//         return alert(`${a} в кубе равняется ${a**3}`);
//     }
// }

// cubing();

// Задание 7 

const firstGame = () => {
    let a = prompt('Введите любой номер месяца, а я вам скажу какое это время года')

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
