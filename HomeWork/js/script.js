// Домашнє завдання
// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
//
// const student = {
//   name: "name",
//   kurs: "kurs",
//   points: "points",
//   missedLes: "missed",
//   studentInfo: function () {
//     console.log(
//       "Student " +
//         this.name +
//         " " +
//         this.kurs +
//         " specialty " +
//         "have " +
//         this.points +
//         " Missed lessons " +
//         this.missedLes
//     );
//   },
// };

// Vlad = {
//   name: "Vlad",
//   kurs: "finance",
//   points: "10",
//   missedLes: "5",
// };

// // student.studentInfo.call(Vlad);
// // student.studentInfo.apply(Vlad);
// student.studentInfo.bind(Vlad)();

// Mary = {
//   name: "Maria",
//   kurs: "design",
//   points: "9",
//   missedLes: "15",
// };

// // student.studentInfo.call(Mary);
// // student.studentInfo.apply(Mary);
// student.studentInfo.bind(Mary)();

// Lena = {
//   name: "Olena",
//   kurs: "low",
//   points: "11",
//   missedLes: "4",
// };

// // student.studentInfo.call(Lena);
// // student.studentInfo.apply(Lena);
// student.studentInfo.bind(Lena)();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке при натисканні на кнопку css - має видати коротке визначення що це таке

// const infoButton = {
//   showInfoButton() {
//     console.log("Це ", this.message);
//   },
// };

// const HTML = {
//   message: "мова розмітки",
// };

// const CSS = {
//   message: "мова стилів",
// };

// infoButton.showInfoButton.bind(HTML)();

// document
//   .querySelector("#HTML")
//   .addEventListener("click", infoButton.showInfoButton.bind(HTML));

// document
//   .querySelector("#CSS")
//   .addEventListener("click", infoButton.showInfoButton.bind(CSS));

// --3--
// Написати функцію магазин, яка отримує назву товару,
// ціну за кг і кількість товару функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const shop = {
//   calcPrice: function (name, price, qts) {
//     console.log(name + " " + price * qts);
//   },
// };

// shop.calcPrice("bananas", 30, 4.5);
// shop.calcPrice("cherry", 58, 1.3);
// shop.calcPrice("orange", 89, 3.4);
