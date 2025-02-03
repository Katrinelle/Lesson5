// Call

// const userInfo = {
//   name: "name",
//   age: 98,
//   logInfo: function (job) {
//     console.group(`${name}info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: 45,
// };

// userInfo.logInfo.call(Vano, "developer");
// // Name is : Ivan
// // Age is : 45
// // Job is : developer

// Apply

// const showUserInfo = {
//   name: name,
//   logInfo: function (job, city) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.log(`City is : ${city}`);
//     console.groupEnd();
//   },
// };
// const Vano = { name: "Ivan" };
// showUserInfo.logInfo.apply(Vano, ["developer", "Lviv"]);
// // Name is : Ivan
// // Age is : 45
// // Job is : developer
// // City is : Lviv

//замикання

// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }

// const calc = createNewSum(5);
// calc(); // 50

// function createNewNumber(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addFive = createNewNumber(5);
// console.log(addFive(10)); // 15

// function createUrl(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = createUrl("com");

// console.log(comUrl("google")); // https://google.com
// console.log(comUrl("fb")); // https://fb.com

// const comUa = createUrl("com.ua");
// console.log(comUa("google")); // https://google.com.ua
// console.log(comUa("fb")); // https://fb.com.ua

//this - контекст

// function hello() {
//   console.log("hello", this);
// }

// hello(); // hello + весь наш документ (глобальгий windows)

// const user = {
//   name: "Ivan",
//   city: "Odessa",
//   sayHello: hello,
// };

// user.sayHello(); // hello {name: "Ivan", city: "Odessa", sayHello: f}

//-----

// function abc() {
//   console.log("В функції");
//   console.log(this);
// }
// abc(); // отримали глобальний window

// // додаємо слухача
// document.querySelector("p").onclick = abc; // коли клікаємо на Hello на сторінці -
// // повертає в консоль <p>Hello</p>

// function changeColor() {
//   console.log(this);
//   this.style.background = "green"; // Hello на сторінці став зеленим по кліку
// }
// document.querySelector("div").onclick = changeColor;
// за допомогою this ми можемо міняти фон лише в когось одногоз div (і лише по кліку)

// function changeColor() {
//   this.style.background = "green"; // Hello на сторінці став зеленим по кліку
// }
// let user = document.querySelectorAll("div");
// // querySelector - шукав пешій div і виконував функцію для нього
// // querySelectorAll - вибере всі div
// // робимо перебір
// user.forEach(function (element) {
//   element.onclick = changeColor;
// }); // всі дані з div на сторінці стають зеленими по кліку

//-----------

// const showList = () => {
//   console.log(this);
// };
// showList(); // отримали глобальний window

// const list = {
//   names: ["Ann", "Olga", "Nata"],
//   showList: showList,
// };
// list.showList(); // отримали глобальний window

// // в стрілочних функціях немає this

//------

// Вбудоані методи

// function hello() {
//   console.log(this);
// }

// const user = {
//   name: "Ivan",
//   age: 30,
//   hello: hello,
// };

// user.hello(); // отримуємо обєкт

//--
// ми хочемо глобальний window - є метод bind
//========= bind

// function hello() {
//   console.log(this);
// }

// const user = {
//   name: "Ivan",
//   age: 30,
//   hello: hello,
//   sayHelloWindow: hello.bind(window), // він привяже потрібний нам контекст
//   info: function (city) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`City is ${city}`);
//   },
// };

// user.hello(); // отримуємо глобальний window
// user.info(); // Name is Ivan Age is 30

// const Ann = {
//   name: "Anna",
//   age: 23,
// }; // тут немає метода info, але ми можемо його використовувати

// user.info.bind(Ann)("Kyiv"); // Name is Anna Age is 23 City is Kyiv
// // за допомогою bind ми можемо використовувати this так, як нам зручно
// bind утворює нову змінну з функцією

// const Nata = {
//   name: "Natalia",
//   age: 50,
// };

// // Name is Natalia Age is 50 City is Odessa

// const nataInform = user.info.bind(Nata, "Odessa");
// nataInform(); // Name is Natalia Age is 50 City is Odessa

//========= call
// call утворює и одразу викликає функцію

// const userInfo = {
//   name: "name",
//   age: 98,
//   logInfo: function (job) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: 45,
// };

// userInfo.logInfo.call(Vano, "developer"); // Name is Ivan Age is 45 Job is developer

//------- d метод call ми можемо безкінечну кількість аргументів додавати

// ========== apply - маємо передавати аргументи масивом

// const showUserInfo = {
//   name: name,
//   age: 87,
//   logInfo: function (job, city) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.log(`City is : ${city}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: 45,
// };

// showUserInfo.logInfo.call(Vano, "developer", "Kyiv");
// // в apply додаткові аргусенти повинні передаватися, як масив в []
// showUserInfo.logInfo.apply(Vano, ["developer", "Kyiv"]);

///////////////////////////////////
///////////////////////////////////

// ---- програма,яка буде вітати людину в готелі і вказувати кількість його зірок

// const message = function (name, stars) {
//   console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = { hotel: "Bukovel" };
// const Turist = { hotel: "Turist" };

// call
// message.call(Bukovel, "Ivan", "5"); // Ivan, Welcome to Bukovel, stars 5
// message.call(Turist, "Slava", "3"); // Slava, Welcome to Turist, stars 3

// apply
// message.apply(Bukovel, ["Ivan", "5"]); // Ivan, Welcome to Bukovel, stars 5
// message.apply(Turist, ["Slava", "3"]); // Slava, Welcome to Turist, stars 3

// bind
// message.bind(Bukovel, "Ivan", "5")(); // Ivan, Welcome to Bukovel, stars 5
// message.bind(Turist, "Slava", "3")(); // Slava, Welcome to Turist, stars 3

//-----

////////

// --- робимо кілька кнопок, при натисканні на які буде показувати, що в нас в кошику

// додаємо button  в html
/* <div>
  <button id="wom">Жіночий одяг</button>
  <button id="man">Чоловічий одяг</button>
  <button id="kid">Дитячий одяг</button>
</div>; */

// const cart = {
//   showItems() {
//     console.log("В кошику: ", this.items);
//   },
// };

// const woman = {
//   items: "Сукня, туфлі",
// };

// const man = {
//   items: "Костюм, рубашка",
// };

// const child = {
//   items: "Майка, шорти",
// };

// // cart.showItems.bind(man)(); // В кошику: Костюм, рубашка

// // павішуємо на кнопки:

// document
//   .querySelector("#wom")
//   .addEventListener("click", cart.showItems.bind(woman)); // !

// document
//   .querySelector("#man")
//   .addEventListener("click", cart.showItems.bind(man)); // !
// document
//   .querySelector("#kid")
//   .addEventListener("click", cart.showItems.bind(child)); // !

// // при кліку на кожну кнопку - видає, що в середені

// ////

//--- програмка, яка буде виводити інформацію про машини

// const infoCar = {
//   name: "BMW",
//   model: "M7",
//   color: "white",
//   showInfo: function () {
//     console.log(
//       "Car " + this.name + " model " + this.model + " color " + this.color
//     );
//   },
// };

// infoCar.showInfo(); // Car BMW model M7 color white

// car2 = {
//   name: "Opel",
//   model: "XXX",
//   color: "red",
// };

// infoCar.showInfo.bind(car2)(); // Car Opel model XXX color red

// infoCar.showInfo.call(car2); // Car Opel model XXX color red

// infoCar.showInfo.apply(car2); // Car Opel model XXX color red
