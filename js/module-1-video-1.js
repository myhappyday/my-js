// Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// Для доступу до елементів використовується синтаксис квадратних дужок масив[індекс], де індекс - це значення лічильника циклу від 0 і до останнього індексу масиву, тобто менше, але не дорівнює його довжині.

// Цикл for...of
// Конструкція for...of оголошує цикл, що перебирає ітерабельні об'єкти, як-от масиви і рядки. Тіло циклу буде виконуватися для значення кожного елемента. Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

// for (const variable of iterable) {
//   // тіло циклу
// }

// variable — змінна, яка буде зберігати значення елемента на кожній ітерації.
// iterable — колекція, яка містить ітерабельні (що можна порахувати) елементи, наприклад масив.

// const clients = ["Mango", "Ajax", "Poly"];
// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";
// for (const character of string) {
//   console.log(character);
// }

// Оператори break і continue
// Будемо шукати ім'я клієнта в масиві імен, якщо знайшли - перериваємо цикл, оскільки немає сенсу шукати далі, імена у нас унікальні.

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// Можна на початку задати message значення невдачі пошуку, а в циклі перезаписати його на успіх, якщо знайшли ім'я. Але break все одно нам знадобиться, оскільки, якщо у нас масив із 10000 клієнтів, а потрібний нам знаходиться на 2 позиції, то немає абсолютно жодного сенсу перебирати інші 9998 елементи.

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";
// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   // Якщо не збігається, то на цій ітерації нічого не робимо
// }
// console.log(message); // Клієнт з таким ім'ям є в базі даних!

// Використовуємо цикл для виведення тільки чисел, більших за певне значення.

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// Усі примітивні типи присвоюються за значенням, тобто створюється копія.

// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5

// Складні типи - об'єкти, масиви, функції присвоюються за посиланням, тобто змінна просто отримує посилання на вже існуючий об'єкт.

// const a = ['Mango'];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]
// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push('Poly');
// console.log(a); // ["Mango", "Poly"]
// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]
// // Результат повторюється
// b.push('Ajax');
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// Методи split() і join()

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// let quantity = prompt('Введіть кількість товарів');
// //prompt() завжди повертає рядок
// quantity = Number(quantity); //Number() - Конструктор для всіх чисел, після повертається число
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);
// console.log(typeof elementWidth);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);
// console.log(typeof elementHeight);

// let salary = 1300.16472;
// salary = salary.toFixed(2); //Відсікає до двох знаків після рухомої крапки, не округлює
// salary = Number(salary);
// console.log(salary);
// console.log(typeof salary);

// Скорочений варіант:
// let salary = 1300.16472;
// salary = Number(salary.toFixed(2)); //Відсікає до двох знаків після рухомої крапки, не округлює
// console.log(salary);
// console.log(typeof salary);

// Або ще коротший варіант (як "Матрьошки" - починає виконуватись з найглибшої):
// let salary = 1300.16472;
// console.log(Number(salary.toFixed(2)));
// console.log(typeof salary);

// Згенерувати псевдовипадкові числа
// Math.random() * (max - min) + min
// Math.round()

// const max = 80;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;

// Нормалізація з методом toLowerCase()

// let brand = 'SamSUng';
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

//Поиск в строке с методом includes()

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// Бульове перетворення (повертає true або false) //Boolean() - Бульовий конструктор
// // Шість значень, які приводять до false, всі інші приврдять до true
// console.log(Boolean(0)); //false
// console.log(Boolean('0')); //true
// console.log(Boolean(null)); //false
// console.log(Boolean('null')); //true
// console.log(Boolean(false)); //false
// console.log(Boolean('false')); //true
// console.log(Boolean('')); //false
// console.log(Boolean(undefined)); //false

// Логічне І (оператор &&)
// Запинається на хибності (перевіряє зліва направо)
// Повертає те, на чому запнулось або останній операнд

// console.log(5 && 4 && 7 && 'mango'); //mango
// console.log(5 && 0 && 7 && 'mango'); //0

// Логічне АБО (оператор ||)
// Запинається на істині (перевіряє зліва направо)
// Повертає те, на чому запнулось або останній операнд

// console.log(5 || 4 || 7 || 'mango'); //5
// console.log(false || 5 || null || 0); //5
// console.log(false || null || 5 || 0); //5
// console.log(false || null || 0); //0

// Логічне НЕ (оператор !)
// Робить інверсію true > false  та  false > true
// Крок 1. Приводить до буля
// Крок 2. Робить інверсію

// console.log(!5); //false
// console.log(!0); //true
// console.log(!null); //true
// console.log(!true); //false
// console.log(!false); //true

// Напиши скрипт, який перевіряє, чи входить число у відрізок, позначений x1 та x2.
// До x1
// Після x2
// Від x1 до x2
// До x1 або після x2

// const x1 = 10;
// const x2 = 30;
// const number = 45;

// console.log(`Число ${number} входить у відрізок до ${x1}? `, number < x1);

// console.log(`Число ${number} входить у відрізок після ${x2}? `, number > x2);

// const res1 = number > x1 && number < x2;

// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

// 15 > 10 && 15 < 30
// true && true
// true
// console.log(`Число ${number} входить у відрізок від ${x1} до ${x2}? `, res1);

// const res2 = number < x1 || number > x2;

// 150 < 10 || 150 > 30
// false || true
// true

// 25 < 10 || 25 > 30
// false || false
// false
// console.log(
//   `Число ${number} входить у відрізок до ${x1} або після ${x2}? `,
//   res2
// );

// Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
// Для цього користувач повинен бути:
// - другом
// - онлайн
// - без режиму не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Чи можна відкрити чат? ', canOpenChat); // false

// Напиши скрипт обробки покупки в магазині.

//  - Баланс користувача збеоігається у змінній balance
//  - Сума покупки збеоігається у змінній payment

//  - Перед перевіркою вивести повідомлення:
//  «Загальна вартість заказу [число] кредитів. Перевіряємо кіл-сть доступних коштів на рахунку»

//  - Якщо сума покупки не перевищує баланс:
//     - Відняти від балансу суму покупки
//     - Вивести повідомлення «На рахунку залишилось [число] кредитів»
//  - Якщо сума покупки перевищує баланс:
//     - Вивести повідомлення «На рахунку недостатньо коштів для проведення операції!»
//  - В кінці вивести повідомлення «Операція завершена»

// 'Все добре, знімаємо кошти... Дякуємо за покупку!'

// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Загальна вартість заказу ${payment} кредитів. Перевіряємо кіл-сть доступних коштів на рахунку`
// );

// if (payment <= balance) {
//   balance -= payment;
//   // balance = balance - payment

//   console.log('Все добре, знімаємо кошти... Дякуємо за покупку!');
//   console.log(`На рахунку залишилось ${balance} кредитів`);
// } else {
//   console.log('На На рахунку недостатньо коштів для проведення операції!');
// }

// console.log('Операція завершена');

// Напиши скрипт підрахунку суми покупки зі знижкою в залежності
// від витраченої суми протягом усього часу (партнерська програма).
// - Занальна сума витрааченого зберігається у змінній totalSpent
// - Сума поточного платежу зберігається у змінній payment
// - Знижка зберігається у змінній discount
// - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
// - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
// - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
// - Якщо витрачено менше 100) - не партнер, знижка 0%
// - В результаті вивести повідомлення
// «Оформлюємо замовлення на суму [сума] зі знижкою [знижка]%»

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовий партнер, знижка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Срібний партнер, знижка 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log('Золотий партнер, знижка 10%');
//   discount = 0.1;
// } else {
//   console.log('Не партнер, знижка 0%');
// }

// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(
//   `Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`
// );

// totalSpent += payment;

// console.log(`Загальна сума витраченого в магазині: ${totalSpent}`);
