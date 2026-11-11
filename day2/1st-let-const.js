// `let`/`const`, template literals, input via `readline`, swap two variables, greet a user

/* 
1. let and const
*/

let name = "Neo";
name = "Anderson";
let age = "24 yrs";

console.log(name, age);
console.log(`The name is ${name}, age is ${age}`);

const place = "Oslo";
// place = "Helsinki"
console.log(place);
console.log(`The place ${place}`);

// Reference assignment in JS

let flower = "Rose";
flower = "Lilly"; // reference assignment in JS

let anotherFlower = console.log(flower);
