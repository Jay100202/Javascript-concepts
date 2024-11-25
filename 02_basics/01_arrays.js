const myArr = [0, 1, 2, 3, 4];

// java script array are resizeable and it can be mixture liek string , booleans , numbers anything
// eg const my arr = [ 1,2,3,"jay", true];

// Ingterview question
// so javascript ke anadar jab bhi aap copy operation karege to ye shallow copies banata he( all standard build in copy operations with any javascript object create shallow copies rather then deep copies)
// a shallow copy of an object is a copy whose properties share the same refernces, iska matlab ye hoga ki jo bhi me array me change karuga vo saab actual array me bhi change hoga
// deep copy ye kehti he ki properties do not share the same reference

const myheroes = ["hvidiuv", "jnfijnfij"];
const myarr2 = new Array(1, 2, 4, 5);

// Array methods

myArr.push(6); // ye simply array ke andar data add karega
console.log(myArr); //[0,1,2,3,4,5,6]

myArr.pop(); // simply lat element ko pop kardega nikal dega

myArr.unshift(9); // [9,0,1,2,3,4,5] ; // spo ye unshift basically element ko sabase aage push kardeta he jo hamne element diya vo
myarr2.shift(); // pehle ement ko nikal dega like [0,1,2,3,4,5]

myArr.includes(9); // this mean skew ye array ko puch raha he ki ye 9 array me he ki nai he

myArr.indexOf(9); // index dega if he to return karega nai hoga to -1 dega

const newarray3 = myArr.join(); // so ye kya karega like string banajyga like
// new array3 will be string
console.log(typeof newarray3);

// slice , splice

console.log("A", myArr);

const nA1 = myArr.slice(1, 3); // this means ke mujhe 1 or 3 ke bichme data he vo do like isme 1 inclue hoga or 2 include hoga 3 include nai hoga

console.log(nA1);
console.log("B", myArr);

const nA2 = myArr.splice(1, 3); // this means ke mujhe 1 or 3 ke bichme data he vo do like isme 1 inclue hoga or 2 include hoga 3 include hoga
console.log("C", myArr);
console.log(nA2);

// so major difference between slice and spice is
// spicer array ko manuplate kardega like yaha pe like splice original array me se 1,3 ke data ko nikal dega
// slice me esa manuplation nai hoga
