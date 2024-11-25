// for of loop

// ["","",""]
// [{}, {},{}] // ye syntex hame kafi dekhne ko milega like hamare array me bioht sare objects hoge to hame loop karke unko access karege or fir dot notation se object ke andar ki chiz ko access karege

const arr = [1, 2, 3, 4, 5];

// ye jo object likhahe like syntext me iska matlab ye nai ke sorf ye object pe hi kam karega ya object pe loop lagega then u r wrong
// iska matlab ye he ki apko kiss ke upar ye loop lagana he
// for (const element of object) {

// }

for (const element of arr) {
  console.log(element);
}

const greetings = "Hello World!";
for (const element of greetings) {
  console.log(`each char is ${element}`);
}

// Maps

// ye hote he like array jese hi hote he
// maps objects hold the key value pair and remebers the orignal inserttion order of the keys
// there is n o duplicate value here

const map = new Map();
map.set("a", "1");
map.set("b", "2");
map.set("c", "1");

console.log(map);

for (const [key, value] of map) {
  console.log(key, "", value);
}

for (const key in map) {
  // ye ham nai kar sakte he like maps are not iterbale isliye ham in use nai kar sakte
  console.log("maps", key);
}

// objects pe apan loop lagate he

const myObj = {
  name: "game",
  name2: "game2",
};
// for (const [key, value] of myObj) {
//   console.log(key, "", value);
// }  // so hame error ayga ki myObjects are not iterable to hamare paass ek disra tarika he so mapos iterable he is tariuke se but not objects

const newObjects = {
  js: "js",
  c: "c++",
  rb: "rubi",
};

// so iske liye he hamara for in loops esa nai he ki for in loops hamesha objects ke liye hi kamate he esa galat he or bhi biht jagah kaam ate he

for (const key in newObjects) {
  console.log(key); // yaha to hame sari ki sari keys mil jaygi
}

// aab tp get the objects hame kya karna hoga
for (const key in newObjects) {
  console.log(newObjects[key]); // aab hame value mil jaygi
}

// Dekho objects ka desogn hi isliye hua tha kyuki arrays ki jo keys he vo 0 se start hoti he and vo number hi hoti he yaha objects me key to aapjo bhi chao vo daal sakte ho
const ps = ["js", "rubi", "python"];
for (const key in ps) {
  console.log(key); // yaha sari ki sari keys aygi arary ki means sari ki sari index aygi
}

for (const key in ps) {
  console.log(ps[key]); // yaha hame values mil jaygi
}

// FOR EACH LOOP
// ye ham zyada tar use karege ese

const coding = ["shivam", "ayush", "ramesh", "tandav"];

// ye foreach jo he vo he higher order function
// coding.forEach() // now ye foreach kya keh raha he hamse vo keh raha he hame ek call back function do to lets go usko function dete he

// coding.forEach(function greet(){}) // npow ese hi function likhte the apan

// coding.forEach(function (){}) // now function hamara call back he isliye usme nam nai ayga isliye hamne greet hata diya he

// coding.forEach(function (item){}) // now kyuko ye function array ke andar chal raha he to ye jo value hogi vo apne aap parameter ke andar leke ayga isliye hamne item likha

coding.forEach(function (item) {
  console.log(item);
});

// To isme xaruri nai he ki aap isko ese hi likhe ham isko arrow function ki tarah bhi likhsakte he
// coding.forEach(greet = () =>{}) //ye nam nai likhege becz call back he
coding.forEach((item) => {
  // yaha bhi apan nam nai likhege ese becz ye callback he
  console.log(item);
});

// chalo lets make this more interesting
function printme(item) {
  console.log(item);
}

coding.forEach(printme); // is tarah se bhi kar sakte he
// yaha pe  dhyaan rakhna just refernce dena he function ka jo hamne banay he like pura function nai dena he print vo karlega
// isliye hamne likha sorf printme

// coding.forEach( (item) => { // to yaha pe hamne usko item diya , isme esa nai hota he ki ye akela item hi leke araha he, iske paas kafi parameter ke access bhi hote he

// })

// to iske paas ata he
coding.forEach((item, index, arr) => {
  console.log(item, index, arr); //shivam 0 [ 'shivam', 'ayush', 'ramesh', 'tandav' ]
  //   ayush 1 [ 'shivam', 'ayush', 'ramesh', 'tandav' ]
  //   ramesh 2 [ 'shivam', 'ayush', 'ramesh', 'tandav' ]
  //   tandav 3 [ 'shivam', 'ayush', 'ramesh', 'tandav' ]

  //this is how the log will be iske paas dekho ye pura access hota he
});

// so hamne dekha tha like pehle like hamare paas esa hoga like array ke andar boht sare objects hoge to ham kese print karege usko
// [{},{}.{}]

const mynewcoding = [
  {
    languagename: "javascript",
    languagefile: "js",
  },
  {
    languagename: "python",
    languagefile: "py",
  },
  {
    languagename: "cpp",
    languagefile: "c++",
  },
];

mynewcoding.forEach((item) => {
  console.log(item); // now ye kya hota he like ye pura object ka access he
  // hame aab object.language ka acces karege
  console.log(item.languagename);
});
