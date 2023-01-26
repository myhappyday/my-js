// Напиши скрипт вибору вартості готелю за кількістю зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$

// Якщо у змінній stars щось, крім чисел 1-5, виведи рядок
// 'Такої кількості зірок немає'

// const stars = 1;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такої кількості зірок немає');
// }
// console.log(price);

// const stars = 1;
// let price;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такої кількості зірок немає');
// }

// console.log(price);

// Напиши скрипт вибору вартості готелю за кількістю зірок.
// 1,2 - 20$, 3,4 - 30$, 5 - 120$

// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такої кількості зірок немає');
// }

// console.log(price);

// const stars = ;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такої кількості зірок немає');
// }
// console.log(price);

// Напиши скрипт который подсчитывает сумму всех чётных чисел,
// которые входят диапазон чисел в переменных от min до max.
// Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.

// //  1 вары
// const min = 0;
// const max = 5;
// let total = 0;

// // фор от min до max с шагом в 1
// for (let i = min; i <= max; i += 1) {
//   // проверяем остаток от деления
//   if (i % 2 !== 0) {
//     // console.log('Не чётное: ', i);
//     continue;
//   }

//   // пишем в сумму
//   console.log('чётное: ', i);
//   total += i;

//   // аналог +=
//   // total = total + i;
// }

// console.log('total: ', total);

// --- DOM ---
// const btnAdd = document.querySelector('button[data-add]');
// const btnReset = document.querySelector('button[data-reset]');
// const valueInput = document.querySelector('input[data-value]');
// const outputEl = document.querySelector('.js-output span');

// // console.log(btnAdd.textContent);
// // btnAdd.textContent = 'qwerty';

// // console.log(valueInput);

// let total = 0;

// btnAdd.addEventListener('click', function () {
//   console.log('click OK');
//   const value = Number(valueInput.value);
//   console.log(typeof value, value);

//   total += value;
//   // console.log('total:', total);
//   outputEl.textContent = total;
//   valueInput.value = '';
// });

// btnReset.addEventListener('click', function () {
//   total = 0;
//   outputEl.textContent = '0';
// });
