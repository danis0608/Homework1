// Задание 1 

// function mult(arr) {
//     let multArr = 1;
//     for (let i = 0; i < arr.length; i++) {
//         multArr *= arr[i];
        
//     }
//     console.log(multArr);
// }

// function sum(arr) {
//     let sumArr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumArr += arr[i];
        
//     }
//     console.log(sumArr);
// }

// function getResult(arr, callback) {
//     callback(arr);
// }

// getResult ([3, 4, 1, 9], mult);
// getResult ([3, 4, 1, 9], sum);

// Задание 2 

// function compareAge(a, b) { 
// 	if (a.age > b.age) return 1;
// 	if (a.age < b.age) return -1;
// 	return 0;
// }

// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];

// users.sort(compareAge);
// console.log(users);


// Задание 3 

// const arr = [1, '4', false, 9, 'two'];
// console.log(arr);

// function reversArr(arr) {
//     arr = arr.reverse();
//     console.log(arr);
// }

// function toNumberArr(arr) {
    
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Number(arr[i]);

//         if (isNaN(arr[i])) {
//             delete arr[i];
//         }

//     }
//     arr = arr.filter(numb => numb != NaN);
//     console.log(arr);
// }

// function each(arr, callback) {
//     callback(arr);
// }

// each(arr, reversArr); // ['two', 9, '4', 1]
// each(arr, toNumberArr);


// Задание 4 

// let timerId = setTimeout(function tick() {
//     let currentDate = new Date();
//     console.log(currentDate);
//     timerId = setTimeout(tick, 3000); // (*)
//   }, 3000);

// setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

// Задание 5 

// const calling = (numberOfBeeps) => {

//     console.log('Звоню'); 

//     const beeps = setInterval(() => {
//         console.log('Идут гудки...');
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(beeps);
//         console.log("Разговор");
//     }, numberOfBeeps * 1000 + 1000);

// }

// calling(4);

