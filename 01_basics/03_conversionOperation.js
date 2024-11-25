// let score = "33";

// console.log(typeof score); // string

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number

// now what if hamne ese likha
// let score = "33aa";

// console.log(typeof score);

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// idhar hamne usko string puri bheji he like aa then also ye number me convert hogaya to ye kese hoga

// now what if hamne ese likha
let score = null;

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// let score = undefined;

// console.log(typeof score);

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// notes

// "33" => 33
//"33abc" => NaN
// true => 1 false = 0
// null => 0
//undefined => NaN

let isloggedin = 1;

let booleanIsLoggedIn = Boolean(isloggedin);
// console.log(booleanIsLoggedIn);

// 1 => true 0 => false
// "" => false
//"jay"=> true

// ----------------------- Operations -----------------------

let value = 1;
let negativeVlue = -value;
// console.log(negativeVlue);

// this all are some f the basic operation
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // this means its like 2 to the power of 2 2^2
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " Jay";

let str3 = str1 + str2;
console.log(str3); // so yaha pe like log karoge to Hello jay hi ayga ye sahi he

// but majotr  problem kaha aygi jaha like
console.log("1" + 2); //12 // string first me he to fir string hi lega pura
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122 // yaha pe bhi string he to fir string hi lega pura
console.log(1 + 2 + "2"); //32

// prefix and postfix
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
