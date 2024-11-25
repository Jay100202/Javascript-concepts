// so what is control flow

//t ohame esa chaiye ki jab ham login ho to hamara itna hi xhizeinf run honi chaiye logout ho to yehi specific chiz run honi chaiye to isi ko ham bolte he control flow

// if statement

// if (condition == true) {
//   // ye jo condition he vo honi chaiye true to hi aap ye if ke andarja sakte ho same like false bhi likh sakte he like if(false){} to ye code execute nai hoga
// }

// comparison,
//<,>,<=,>=,==, !=, ===, !==
// 5 !== "5";   // true, because 5 is a number and "5" is a string
// 5 !== 5;     // false, because both the value and type are the same
if (2 == "2") {
  // here this 2 will convert that string to 2 and check it so log will come
  console.log("executed");
}

if (2 === "2") {
  // here this === means it is also checking the data types one is string and another is number so this will not execute
  console.log("noo");
}

// TRUTHY AND FALSY VALUES

//const useremai = "jay@ai"; // to log me ayga got it
//const useremai = ""; // log me ayga not go it
const useremai = []; // log me ayga got it

// to ye ho kya raha he like empty string diya to not got it ayga empty array diya to got it aya
if (useremai) {
  console.log("got it");
} else {
  console("not got it");
}

// falsy values

// false, 0,-0(Interview),BigInt(big int me ham likhte he 0n usko bhi false hi mana jata he),
// "",null , undefined , NaN

// truthy values

//string ke andar ham jo likhte he vo truthy value ban jati he like
// "0","false" // ye isliye true he becz string ke andar likhi gai he
// "0",'false', " "(space diya hevisliye true he ye),[],{}, function(){}

if (useremai.length === 0) {
  console.log("true");
}

const empObject = {};
if (Object.keys(empObject).length === 0) {
  console.log("true");
}

// Nullish Coalescing operator (??): null undefined // yaha sari kahani ye null or undefined ke upar hi rahegi

let val1;
val1 = 5 ?? 10;

console.log(val1); // 5
// to apke maan me question ayga ki ye 10 lagane ki zarurat hi kya thi like 5 ?? 10 like if hame 5 hi lena tha to
// to jab ham kabhi database se like firewall se and all, data call karege to like directly apko data nai milta he
// to chances he ki apka null response ajaye ya response ye hi na undefined ajaye to uss case me apka code structure pareshan ho sakta he

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 4;
console.log(val1); // to vahi keh rahe ham ke if undefined arahi he to undefined set kardo ya to if koi method hog9 koi function hoga usko call kardo like hamne yaha pe 10 diya he

// Terniary operator (?)

// to ye terniary operator or null colescing operator dono alag he
//  this basically behave as a if else condition
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");

// In JavaScript, ?? and ? are two distinct operators with different purposes:

// 1. ?? (Nullish Coalescing Operator)
// The ?? operator checks if the left-hand side is either null or undefined.

// If the left side is null or undefined, it returns the right-hand side.

// This is useful when you want to provide a default value only if a variable is null or undefined.

// javascript
// Copy code
// let name = null;
// let defaultName = name ?? "Anonymous";
// console.log(defaultName); // Output: "Anonymous"
// In this case, since name is null, ?? returns "Anonymous".

// Important Note: ?? does not treat false, 0, or an empty string ("") as null or undefined, so it only applies when the value is explicitly null or undefined.

// javascript
// Copy code
// let value = 0;
// console.log(value ?? 10); // Output: 0, because 0 is not null or undefined
// 2. ? (Ternary Conditional Operator)
// The ? in JavaScript is part of the ternary conditional operator (condition ? exprIfTrue : exprIfFalse).

// It allows for a shorthand way of writing an if-else statement.

// javascript
// Copy code
// let age = 18;
// let message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(message); // Output: "You are an adult"
// Here, if age is 18 or greater, message is set to "You are an adult", otherwise it’s "You are a minor".

// Summary
// ?? is the nullish coalescing operator and is used to provide a default only when a value is null or undefined.
// ? is part of the ternary operator and is used for conditional expressions to choose between two values.
