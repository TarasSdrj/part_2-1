// 1. 

function getFirstWord(a: string) {
	return a.split(/ +/)[0].length;
}
console.log(`task - 1. ${getFirstWord("frodo +gibo +gak")}`);
console.log('-----------------------------------------------');

// 2. 

function getUserNamings(a: {name : string , surname : string}) {
    return { 
          fullname: a.name + " " + a.surname, 
          initials: a.name[0] + "." + a.surname[0] 
      };
  }
  console.log(`task - 2. ${getUserNamings({name : "arfa" , surname : "gabart"}).fullname}`);
  console.log(getUserNamings({name : "arfa" , surname : "gabart"}));
  console.log('-----------------------------------------------');

  // 3. 

// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
// https://www.freecodecamp.org/news/optional-chaining-javascript/
function getAllProductNames(a : {products : [prod : {name : string} ]}) {
  return a?.products?.map(prod => prod?.name) || [];
}
console.log(`task - 3. ${getAllProductNames({ products : [{name : "aplle"}]})[0]}`);
console.log('-----------------------------------------------');

// 4.1

// easy way is using 'as' keyword
// hard way is ?...

//https://habr.com/ru/articles/784862/


interface UserP {
  name : () => string;
  cuteness? : number;
  coolness? : number;
} 

function heys(a : UserP) {
    return "hey! i'm " + a.name();
}
heys({name: () => " roma", cuteness: 100});
heys({name: () => "vasya", coolness: 100});

console.log(`task - 4.1. ${heys({name: () => " roma", cuteness: 100})}`);
console.log('-----------------------------------------------');

// 4.2

class Cat {
  constructor(name: string,  isPlayful: boolean,  type = "cat",  cutteness :number ){
      }
  name(){
    return this.name;
  }
}
class Dog {
  constructor( name: string, readonly  weight: number, readonly type = "dog", readonly coolnes :number){
  }
  name(){
    return this.name;
  }
}

function hhey(abstractPet: Cat | Dog | UserP) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true);

let b = new Dog("gavchik", 333);
hhey(a);
console.log(hhey(a));
hhey(b);
console.log(hhey(b));
console.log('-----------------------------------------------');

// 4.3

function hey(a : Cat | Dog ) {
  return "hey! i'm " + a.name()
   + (a.type === "cat" ? ("cuteness: "+a.cuteness) : ("coolness: "+a.coolness))
}
hey({name: () => "roma", type: "cat", cuteness: 100})
hey({name: () => "vasya", type: "dog", coolness: 100})

// 5.

// google for Record type
// https://refine.dev/blog/typescript-record-type/#enter-the-record

type bType = 
 | []
 | {};

function stringEntries(b: bType) {
  return Array.isArray(b) ? b : Object.keys(b)
}

console.log(stringEntries({name : "Boris", age : 50}))
console.log('-----------------------------------------------');

// 6.

// you don't know Promises and async/await yet. Or do you? 
// ....can be hard, don't worry and SKIP if you do not know how to do it
// https://habr.com/ru/articles/794250/

async function world(a: number) {
  return "*".repeat(a)
}
const hello = async () => {
 return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))



