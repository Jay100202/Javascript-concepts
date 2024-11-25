// objects ko declare karne ke 2 tarike hote he ek he literal ki tarah ek he constructor ki tarah

// singleton = constructor se koi bhi object banate he to usko ham singletom kehte he
// literals  ki tarah jab ham object banate he to vo singleton nai banta he

// object literals

// Object.create(); // method 1 isiko bola jata he singleton vala chiz constructor se banaya jata he

const mySm = Symbol("key1");
const jsuser = {
  // isko kehte he literals se object bana na
  name: "Jay",
  "full name": "jay m",
  [mySm]: "key22",
  age: 18,
  location: "jaipur",
  isloggedIn: false,
  lastlogin: ["Monday", "Saturday"],
};

// now how to access this object
console.log(jsuser.name); // ye to he ek tarika
console.log(jsuser["name"]); // yaha pe name hamne string isliye likha beca
// yaha like const jsuserr = {name:"jay"} ye backgrounf me name jo he vo string me hi store hota he
console.log(jsuser["full name"]);

// Now ye interview question he like ek symbol lo usko object ke andar dalo or print karke batao so ye mene upar kita he waytch here
console.log(jsuser.mySm); // ismke ayga to ye key22 but ye galat he
// because jab aap iska type dekhoge to ye symobol nai kuch or hi he
console.log(typeof jsuser.mySm); // string

// to hame isko symbol use karne ke liye hame square bracket me mySm ko dalna padega
// like this [mySm] : "key22"

// or aab isko access karna ho0 to then we have to use like
console.log(jsuser[mySm]);

jsuser.name = "kkkk"; // change karte he value ese
// Object.freeze(jsuser); // yaha hamne hamare object ko freeze kardiya aab ham koi chnage nai kar sakte he hamare object me
jsuser.name = "micro";
console.log(jsuser);

jsuser.greeting = function () {
  console.log("greeting");
};
console.log(jsuser.greeting());
console.log(jsuser.greeting); // op:- [Function (anonymous)] iks amatlab ye hota he ki function execute nai hua he pr sirf fucntion ka refernce aya he

jsuser.greeting2 = function () {
  // yaha pe hame hamare object mese name print karana he to vo kese katrege using this.name vala stuff se
  console.log(`greeting hi ${this.name}`);
};
console.log(jsuser.greeting2());
