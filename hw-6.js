// Задание 1 

// let firstArr = [1, 5, 4, 10, 0, 3];

// for (const arrIndex in firstArr) {
//     if (firstArr[arrIndex] === 10 ) {
//         console.log(firstArr[arrIndex]);
//         break;
//     }
//     console.log(firstArr[arrIndex]);
// }

// Задание 2 

// let firstArr = [1, 5, 4, 10, 0, 3];

// for (const search in firstArr) {
//     if (firstArr[search] === 4) {
//         console.log(Number(search) + 1);
//     }
// }

// Задание 3 

// let secondArr = [1, 3, 5, 10, 20];

// let joinArr = secondArr.join(' ');
// console.log(joinArr);

// Задание 4 

// let min = 1;
// let max = 10;
// let randomArr = [];
// let evenArr = [];
// let lenArr = 10;

// for (let i = 0; i < lenArr; i++) {
//     let x = Math.floor(Math.random() * (max - min + 1)) + min;
//     randomArr.push(x);
// }

// console.log(randomArr);

// for (const k in randomArr) {
//     if (randomArr[k] % 2 == 0) {
//         evenArr.push(randomArr[k]);
//     }
// }

// console.log(evenArr);

// Задание 5 

// let M = 3, N = 3;

// let multiArr = [M];

// for (let i = 0; i < 3; i++) {
//     multiArr[i] = [N];
//     for (let j = 0; j < 3; j++) {
//         multiArr[i][j] = 1;
//     }
// }

// console.log(multiArr);

// Задание 6 

// let newArr = [1, 1, 1];
// console.log(newArr);

// newArr.push(2, 2, 2);
// console.log(newArr);


// Задание 7 

// let anotherArr = [9, 8, 7, 'a', 6, 5];

// anotherArr = anotherArr.sort();
// console.log(anotherArr);

// anotherArr.pop();
// console.log(anotherArr);


// Задание 8 

// let eightArr = [9, 8, 7, 6, 5];
// console.log(eightArr);

// let inputNumber = Number(prompt('Введите число'));
// if (eightArr.includes(inputNumber)) {
//     console.log('такое число есть в массиве');
// } else {
//     console.log('такого числа нет');
// }

// Задание 9 

// let nineString = 'abcdef';
// console.log(nineString);

// let nineArr = nineString.split('');
// console.log(nineArr);

// nineArr = nineArr.reverse();
// console.log(nineArr);

// nineString = nineArr.join();
// console.log(nineString);

// Задание 10 

// let min = 1;
// let max = 10;
// let randomArr = [];
// let lenArr = 6;
// let sum = 0;
// let averageValue = 0;

// for (let i = 0; i < lenArr; i++) {
//     let x = Math.floor(Math.random() * (max - min + 1)) + min;
//     randomArr.push(x);
//     sum += randomArr[i];
// }

// console.log(randomArr);

// averageValue = sum / lenArr;
// console.log(averageValue);

// Задание 11 

// let elevArr = [[1, 2, 3,],[4, 5, 6]];
// console.log(elevArr);
// let transformArr = [];
// console.log(elevArr.length);

// for (let i of elevArr) {
//     for (let j = 0; j < i.length; j++ ) {
//         transformArr.push(i[j]);
//     }
// }

// console.log(transformArr);

// Задание 12 

// let min = 1;
// let max = 10;
// let randomArr = [];
// let evenArr = [];
// let lenArr = 10;

// for (let i = 0; i < lenArr; i++) {
//     let x = Math.floor(Math.random() * (max - min + 1)) + min;
//     randomArr.push(x);
// }

// console.log(randomArr);

// for (let i = 0; i < randomArr.length - 1; i++) {
//     console.log(randomArr[i] + randomArr[i+1]);    
// }