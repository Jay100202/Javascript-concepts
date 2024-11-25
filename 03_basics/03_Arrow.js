// Arrow function

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`); // abhi merkjo yaha pe like ye userrname dalna he  olike direct ham use nai kar sakte like likh diya username ese , so ham iski jagah use karege this , ye jo this he vo bata ta he current contexct means hamare ye user object mese kis ko access karna ho to ye contect me se to ham this use karege
    console.log(this); // yaha like hitesh ayga and then same vala ayga
  },
};

// user.welcomeMessage(); // hitesh welcome to website
// user.username = "sam";
// user.welcomeMessage(); // sam welcome to website // ye change hua  becz ike hamen hard code nai likha like this.username kiya je so thats why

// now ham yaha this log karate to dekhte he kya ata he
console.log(this); // empty ayga because hamare abhi enviornment me kuch variable shi nai he jisko ye refer kare means ke koi cntect hi nai he

// ab ham yen hai chix hamare browser me jake dalege to hame boht kuch milega to ye kyu mil raha he
// see like pehle ke time me kya hota tha java script ko execute karne ka ek hi tarika tha vo tha browser ke andar, to hamara jo engine he jo javascript ko executre karta tha vo sirf ek hi jagah paya jata tha vo he browser ke andar
// abhi hamne kya kiya vo engine ko nikala ,  to browser ke andar jab bhi vo engine run karta he to sabase jyada jo global object he vo he Windown objecttab hi to aap click kar pa rahe he koi action kar rahe he and all
//

// function one() {
//   let username = "jay";
//   console.log(this.username);// undefined // so ye hamara this jo he vo sirf object ke andar i kam kar raha he vo ek functions me kam nai kar raha
//   console.log(this); // abhi jhamne jab isko run kiya to boht sari value ai log me because hamne ye ek function ke andar daalke log karaya he
// }

// one();

// const chai = function() {
//     let username = "jay";
//     console.log(this.username);
//     console.log(this);
//   };

// this is how we define arrow function
const chai = () => {
  let username = "jay";
  console.log(this.username);
  console.log(this); // undefined ayga this hi undefined ayga
};

chai();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 4));

const addttt = (num1, num2) => num1 + num2; // this is known as implicit  function

// const addttttt = (num1, num2) => ( num1 + num2 );  this is also an another method
