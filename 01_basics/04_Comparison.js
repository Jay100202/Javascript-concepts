// ye sare to simple comparison he

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log( 2 != 1);

// Now problem yaha nai ayga because ye same data type ke he
// problem yaha aygi jab data types different honge

// console.log("2" > 1); // true //automatically javasscript ne yaha iss string ko convert kardiya number me
// // so like hame dhyaan rakhna oadega like code likhte vakht ke ham in do alag datatypes ko compare hi na kare
// console.log("02" > 1); // true

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null < 0); // false
// console.log(null >= 0); // true yaha pe true isliye like itna accurate nai he ye predicatble resuolt nai te
// because yaha pe comparison hoga isliye

// the reason is that an equality check == and comaprisons > < >= <= work differently
// Compaqrisons convert null to a number treating it as 0 thats why
// null >=0 is true and null > 0 is false

// Now there is something known as strict check (===)
// === check kya karte he basically like strictly check karta he value or data types dono ko

console.log("2" == 2); // true yaha pe like string 2 ka conversion  hoke 2 ke sath comparison hua he
console.log("2" === 2); // false // yaha like strictly values or data types dono ka comaprison hua he
