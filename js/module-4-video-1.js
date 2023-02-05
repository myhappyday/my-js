// ----------
// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet('Манго')); // Ласкаво просимо Манго.

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }
// ----------
// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }
// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }
// registerGuest('Манго', greet);

// ----------
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest('Манго', function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest('Полі', function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// ----------
// Декілька колбеків
// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall('Манго');

// Виконаємо рефакторинг функції таким чином, щоб вона приймала два колбеки onAvailable і onNotAvailable, і викликала їх за умовою.
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Полі', takeCall, leaveHoloMessage);

// ----------
// Абстрагування повторення
// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// Але що робити, якщо ми хочемо виконати щось, крім логування чисел? Оскільки «робити щось» можна уявити функцією, а функції - це просто значення, ми можемо передати дію як аргумент.

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log('Logging value: ', value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// ----------
// Метод forEach
// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// ----------
// Стрілочні функції
// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

//Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками дорівнює = і стрілкою =>.
// const add = (a, b, c) => {
//   return a + b + c;
// };

// Якщо параметр один, його можна оголошувати без круглих дужок.
// const add = a => {
//   return a + 5;
// };

// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.
// const greet = () => {
//   console.log('Привіт!');
// };

// ----------
// Неявне повернення
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// Якщо є фігурні дужки, і функція повинна повертати якесь значення, необхідно явно поставити return. Це називається явне повернення (explicit return). Такий синтаксис використовується у разі, якщо в тілі функції потрібно виконати ще якісь інструкції, крім повернення значення.

// const add = (a, b, c) => a + b + c;
// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. Це називається неявне повернення (implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.
// Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з тілом і виразом, що повертається, але доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, крім повернення значення.

// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Після
// const arrowAdd = (a, b, c) => a + b + c;

// ----------
// Псевдомасив arguments
// У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]

// ----------
// Стрілочні функції як колбеки
// Анонімні стрілочні функції відмінно підходять як колбеки для перебираючих методів масиву завдяки коротшому синтаксису оголошення, особливо, якщо не потрібне тіло функції.

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання. Це варто робити, якщо одна функція використовується у декількох місцях програми або якщо вона громіздка.

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// ----------
// Імперативний vs декларативний
// Розглянемо різницю підходів на прикладі базової операції фільтрації колекції. Напишемо код перебирання і фільтрації масиву чисел за певним критерієм.

// Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }
// console.log(filteredNumbers); // [4, 5]

// Метод filter() приховує в собі логіку перебирання колекції і викликає callback-функцію, яку ми йому передаємо для кожного елемента, повертаючи масив елементів, що відповідають критерію.

// Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]
