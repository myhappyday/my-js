// spread: передача аргументів
// Метод Math.max(аргументи) шукає і повертає найбільший з аргументів (чисел), тобто очікує не масив значень, а довільну кількість аргументів.

// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// spread: створення нового масиву
// const temps = [14, -4, 25, 8, 11];
// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// console.log(lastWeekTemps);
// const currentWeekTemps = [23, 17, 18];
// console.log(currentWeekTemps);
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// spread: створення нового об'єкта
// const first = { propA: 5, propB: 10 };
// console.log(first);
// const second = { propC: 15 };
// console.log(second);
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const first = { propA: 5, propB: 10, propC: 50 };
// console.log(first);
// const second = { propC: 15, propD: 20 };
// console.log(second);
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }
// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// const first = { propA: 5, propB: 10, propC: 50 };
// console.log(first);
// const second = { propC: 15 };
// console.log(second);
// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }
// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }
// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// rest: збирання всіх аргументів функції
// Як оголосити параметри функції таким чином,
// щоб можна було передати будь-яку кількість аргументів?
// function multiply() {
//   // ...
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// console.log(multiply);

// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// console.log(multiply);

// rest: збирання частини аргументів функції
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// Патерн «Об'єкт параметрів»
// function doStuffWithBook(title, numberOfPages, downloads, rating, isPublic) {
//   // Робимо щось з параметрами
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(downloads);
//   console.log(rating);
//   console.log(isPublic);
// }
// // І так далі
// // ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook('The Last Kingdom', 736, 10283, 8.38, true);

// Патерн «Об'єкт параметрів» допомагає вирішити цю проблему, замінюючи набір параметрів всього одним об'єктом з іменованими властивостями.

// function doStuffWithBook(book) {
//   // Робимо щось з властивостями об'єкта
//   console.log(book.title);
//   console.log(book.numberOfPages);
//   console.log(book.downloads);
//   console.log(book.rating);
//   console.log(book.isPublic);
//   // І так далі
// }

// У такому випадку, під час її виклику передаємо один об'єкт з необхідними властивостями.

// // // ✅ Все зрозуміло
// doStuffWithBook({
//   title: 'The Last Kingdom',
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// Ще один плюс у тому, що можна деструктуризувати об'єкт в параметрі book. Це можна зробити в тілі функції.

// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(downloads);
//   console.log(rating);
//   console.log(isPublic);
//   // І так далі
// }

// Або відразу в сигнатурі (підписі) функції - немає різниці.

// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(downloads);
//   console.log(rating);
//   console.log(isPublic);
//   // І так далі
// }
