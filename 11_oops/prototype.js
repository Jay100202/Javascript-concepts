function multiply5(nums) {
  return nums * 5;
}

//multiply5(5);  // now hame pata he iss tarah se ham acess ka rsakte he hamare function ko
// but hame ye nai karna hame karna he like

multiply5.power = 2; // to ye kese . kar ke access kya function object he becz . access to object ke sath hi kiya jata he

console.log(multiply5(5));
console.log(multiply5.power);
console.log(multiply5.prototype);

// so isase hame ye pta chalta he javascript me har chiz object hoti he like function
// bhi ek object he and vo function,function bhi he

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// now agar mujhe prototype likhna ho to me kya likhga sakya hu yess likha sakte ho

// createUser.prototype.increment = function () {
//   score++;
// };
// now yah to mene ese ek prototype inject kar diya like score ko badhane ka
// but like suyppose like mere multiple users hoge like

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

// now hamne protype me esa likh he score++ aab ye kiska score ++ karega like chai ka ya tea ka
// jese like mummy ne bulauya and then papa ne bhi bulaya to ye increment kiske paas jayga usko pta nai me kisike paas jau
// to uske liye ham use karege this

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

chai.printMe();

// now isko jab ham run karege like to error ayga cannot read properties of undefined
// here like hamne properties inject hui he leing jab hamne hamare function se vo value transfer ki like jab create user ko chai me dala to usko bataya nai ki ye additional properties ai he vo hamne batana padega by doing new

// IMP NOTES
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
