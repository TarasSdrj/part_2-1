"use strict";
// 1. 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}
console.log(`task - 1. ${getFirstWord("frodo +gibo +gak")}`);
console.log('-----------------------------------------------');
// 2. 
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
console.log(`task - 2. ${getUserNamings({ name: "arfa", surname: "gabart" }).fullname}`);
console.log(getUserNamings({ name: "arfa", surname: "gabart" }));
console.log('-----------------------------------------------');
// 3. 
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
// https://www.freecodecamp.org/news/optional-chaining-javascript/
function getAllProductNames(a) {
    var _a;
    return ((_a = a === null || a === void 0 ? void 0 : a.products) === null || _a === void 0 ? void 0 : _a.map(prod => prod === null || prod === void 0 ? void 0 : prod.name)) || [];
}
console.log(`task - 3. ${getAllProductNames({ products: [{ name: "aplle" }] })[0]}`);
console.log('-----------------------------------------------');
function heys(ab) {
    return "hey! i'm " + ab.name();
}
heys({ name: () => " roma", cuteness: 100 });
// heys({name: () => "vasya", coolness: 100});
console.log(`task - 4.1. ${heys({ name: () => " roma", cuteness: 100 })}`);
console.log('-----------------------------------------------');
// 4.2
class Cat {
    constructor(name, isPlayful) {
    }
    name() {
        return this.name;
    }
}
class Dog {
    constructor(name, weight) {
    }
    name() {
        return this.name;
    }
}
function hey(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true);
let b = new Dog("gavchik", 333);
hey(a);
console.log(hey(a));
hey(b);
console.log(hey(b));
console.log('-----------------------------------------------');
function stringEntries(b) {
    return Array.isArray(b) ? b : Object.keys(b);
}
console.log(stringEntries({ name: "Boris", age: 50 }));
console.log('-----------------------------------------------');
// 6.
// you don't know Promises and async/await yet. Or do you? 
// ....can be hard, don't worry and SKIP if you do not know how to do it
// https://habr.com/ru/articles/794250/
function world(a) {
    return __awaiter(this, void 0, void 0, function* () {
        return "*".repeat(a);
    });
}
const hello = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield world(10);
});
hello().then(r => console.log(r)).catch(e => console.log("fail"));
// // Функція, яка повертає рядок зі зірками
// async function world(a:number) {
//   return "*".repeat(a);
// }
// // Асинхронна функція hello
// const hello= async () => {
//   try {
//     const result : string = await world(10); // Очікуємо результат виконання world(10)
//     console.log(result); // Виводимо результат у консоль
//   } catch (error) {
//     console.log("fail"); // Виводимо "fail", якщо виникає помилка
//   }
// };
// hello(); // Викликаємо функцію hello
