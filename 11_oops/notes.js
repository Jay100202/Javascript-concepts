// Javascript and classes

//OOP

//Object
// - collection of propertoies and methods
// -toLowercase

// whjy use oops
// because like before the oops the code structure was messed up like repeatative codes are been used in this

// parts of oops
// Object litreral , Constructor function, Prototypes, Classes, Instances(new,this)

// 4 pillars
// abstraction, Encapsulation, Inheritance, Polymorphism

const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);
