// Задание 1

// let jvscr = 'js';
// jvscr = jvscr.toUpperCase();
// console.log(jvscr);    

// Задание 2 

// const searching = (str, word) => {

//     let result = [];

//     str.forEach((words) => {
//         if (words.toLowerCase().startsWith(word.toLowerCase())) {
//             return result.push(words);
//         }
//     });

//     console.log(result);

// }


// searching(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');

// Задание 3 

// let numb = 32.58884;

// console.log(Math.floor(numb)); // до меньшего целого
// console.log(Math.ceil(numb));  // до большего целого
// console.log(Math.round(numb)); // до ближайшего 

// Задание 4 

// let numbers = [52, 53, 49, 77, 21, 32];

// let maximum = Math.max.apply(null, numbers);
// console.log(maximum);

// let minimum = Math.min.apply(null, numbers);
// console.log(minimum);

// Задание 5 

// const randomNumb = () => {
//     let x = Math.floor(Math.random() * 10 + 1);
//     console.log(x);
// }

// randomNumb();

// Задание 6 

// const randomArr = (maxValue) => {

//     let arr = [];

//     for (let i = 0; i < Math.floor(maxValue / 2); i++) {
//         arr.push(Math.floor(Math.random() * (maxValue + 1)));
//     }

//     console.log(arr);
// }

// randomArr(29);

// Задание 7 

// const numbCreating = (minNumb, maxNumb) => {
//     let x  = Math.floor((Math.random() * ((maxNumb + 1) - minNumb)) + minNumb);
//     console.log(x);
// }

// numbCreating(2, 9);

// Задание 8 

// let actualDate = new Date();
// console.log(currentDate);

// Задание 9 

// let currentDate = new Date();

// console.log(currentDate);

// currentDate.setDate(73 + currentDate.getDate());
// console.log(currentDate);


// Задание 10 

// const fullDay = (x) => {

//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//         "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

//     let q = 'Дата: ' + x.getDate() + ' ' + months[x.getMonth()] + ' ' + x.getFullYear() + ' - это ' + days[x.getDay()] + '\n' + 
//     'Время ' + x.getHours() + ':' + x.getMinutes() + ':' + x.getSeconds();

//     console.log(x);
//     console.log(q);
// }

// let day = new Date();
// fullDay(day);

// Задание 11  

const secondGame = () => {
    let fruitsArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    console.log(fruitsArr);

    fruitsArr = fruitsArr.sort(() => Math.random() - 0.5);
    alert(`Запомни эти фрукты ${fruitsArr}`);

    let firstAnswer = prompt('Чему равнялся первый элемент массива?');
    let secondAnswer = prompt('Чему равнялся последний элемент массива?');

    if (firstAnswer.toLowerCase() === fruitsArr[0].toLowerCase() && secondAnswer.toLowerCase() === fruitsArr[fruitsArr.length - 1].toLowerCase()) {
        alert('Ну ты крутой!!');
    } if (firstAnswer.toLowerCase() !== fruitsArr[0].toLowerCase() && secondAnswer.toLowerCase() !== fruitsArr[fruitsArr.length - 1].toLowerCase()) {
        alert('Ничего не верно(((')
    } else {
        alert('Ты почти угадал');
    }

}



