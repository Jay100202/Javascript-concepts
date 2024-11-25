let myNmae = "Jay";
console.log(myNmae.length); // yaha pe apko [pata he ki length 3 aygi]

// now suppose hamne kiya like esa
let myName1 = "Jay     ";
// aab length zyada ayga becz of spaces now hame e kproperty likhege like

console.log(myName1.truelength); // aab ye esi property hogi ke like vo apko bole ki this myname has this true length
// hame proiperty nai method chaiye
// property means like length hi or method means like trim()

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`Hitesh is present in all object `);
};
// now hamne ye object me prototype dala which means ye prototype array, string , function tino me agaya he kyuki hamne vo diagram dekha tha

heroPower.hitesh();
myHeroes.hitesh();
// this is working matlab apni properties array ke paas bhih  eobject ke paas bhi he and all

// now ham ese karege like agar me power sirf array ke paas do , to kya by default object ke ppas chali jaygi power
Array.prototype.HeyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.HeyHitesh(); // isko access nai milna chaiye kyuki like
// apne niche vale ko access dia he to upar vale ko access nai milna chaiye like
// apne upar vale ko access dia to fir niche vale sabko access milna chaiye

// inheritance

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: true,
};

const TaSupport = {
  makeAssignment: "JS assign",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__;

// modern syntex

Object.setPrototypeOf(teachingSupport, teacher);

let anotherUserName = "ChaiAurCode     ";
String.prototype.truelength = function () {
  console.log(`True length is: ${this.trim().length}`);
};

anotherUserName.truelength();

"Jay    ".truelength();
