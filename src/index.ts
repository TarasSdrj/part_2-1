// 1. 

// function getFirstWord(a: string) {
// 	return a.split(/ +/)[0].length;
// }
// console.log(`task - 1. ${getFirstWord("frodo +gibo +gak")}`);

// 2. 

// function getUserNamings(a: {name : string , surname : string}) {
//     return { 
//           fullname: a.name + " " + a.surname, 
//           initials: a.name[0] + "." + a.surname[0] 
//       };
//   }
//   console.log(getUserNamings({name : "arfa" , surname : "gabart"}));

  // 3. 

// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
// https://www.freecodecamp.org/news/optional-chaining-javascript/
// function getAllProductNames(a : {products : [prod : {name : string} ]}) {
//   return a?.products?.map(prod => prod?.name) || [];
// }

// 4.1

// easy way is using 'as' keyword
// hard way is ?...

// interface User {
//   name : string;
//   parametr : number;
// }

// let ab ={name: () => " roma", cuteness: 100};
// type aType = typeof ab;

// function heys(a : User) {
//     return "hey! i'm " + a.name();
// }
// hey({name: () => " roma", cuteness: 100});
// // hey({name: () => "vasya", coolness: 100});
// console.log(typeof ab);

// 4.2

// class Cat {
//   constructor(name: string, isPlayful: boolean ){
//     // this.name = name;
//     // this.isPlayful = isPlayful;
//   }
//   name(){
//     // console.log(this.name);
//     return this.name;
//   }
// }
// class Dog {
//   constructor(name: string, weight: number){
//   }
//   name(){
//     // console.log(this.name);
//     return this.name;
//   }
// }

// function hey(abstractPet: Cat|Dog) {
//     return "hey! i'm " + abstractPet.name();
// }
// let a = new Cat("myavchik", true)
// let b = new Dog("gavchik", 333)
// hey(a)
// console.log(a.name)
// hey(b)

// 5.

// google for Record type
// https://refine.dev/blog/typescript-record-type/#enter-the-record

function stringEntries(a) {
   return Array.isArray(a) ? a : Object.keys(a)
}