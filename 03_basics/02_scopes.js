// scope ki kahani start hoti he let , var , const

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// so now jab hamne log kiya to sab ache se log hua agar like let se saab kam chal raha ache se to zarurat kya this var and const lane ki

// so isko leke isliye aye kyuki hamare jo block scope ko jo ki hona chiaye tgha uski tarh kam nai kar rahi
// so the reason is
// so the dikkat ati he curely braces me {}

// to ye curely braces ko aap objects ke sath maat jodye isko aap lo function ke sath lopp lke dath if else ke sath

// now maanlo ye teeno ko hamne is condition me daaliya
//var c = 300;

let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //var c = 30;
}

//console.log(a); // a is not define okay good
// console.log(b); // b is not define this is also good
// console.log(c); // 30 so ye he sabse badi problem ki baat

// so like maan lo ek programe aya usmne ese likha upar like var c = 300 but abhi jab log kiya to usko 30 mila to ye nai chalge ana

// to isliye ham let use karte he zyada tar

// INterview

// like apne jab browser me jake global scope check karoge uske console me to vo alag he or yaha hamare vc coe me karoge tio alag he
// reason badme baata ta hu

// nested scope

function one() {
  const username = "jay";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website); // ye access nai kar sakte becz iska scope khatam hogaya ye tum scope ke baharaccess ka rrahe ho
  two();
}
one();

// -------------------------------- Interesting ---------------

// this is two methods to declare the function yaha pe thod alag alag tarike he functio0n ko declare karne ke
// function addone(num) {
//   return num + 1;
// }

// addone(5);

// const addtwo = function (num) {
//   return num + 2;
// };

// addtwo(6);

// now ham yaha karege like ham jo hamne function call kiya he usko upar leke jate he means

console.log(addone(5)); // 6 yaha this will work because like hamne upar call kiya but stillanswer diya
function addone(num) {
  return num + 1;
}

addtwo(6); // yaha we will get like cannot access addtwo before initialization
const addtwo = function (num) {
  return num + 2;
};

//so ye problem ati he jab aap function ko kis tarah se declare karte he like first ham hamne directly declare kiya he function ko
// but seconf me hamne uss function ko ek variable me hold bhi kiya he
// so ye aage jake ek concept ayga jisko ham bolege hoisting
