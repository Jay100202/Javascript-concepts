// Datatypes ke do cATEGORIES HE LIKE PRIMITIVE AND NON PRIMITIVE LIKE OR  YE DO KYU ESE HE CATEGORIES TO ISKA REASON YE HE KI
// to kis tarah se data ko memory me store kiya jata he and kis tarah se usko access kia jata he inke basis pe hamara differentitaion he primitive or non primitive ka

// primitive (call by value hota he like iska matlab ye hota he jo bhi data hota he uski copy apko di jati he naki original value )
// 7 types : String , NUmber, boolean, NULL, undefined, Symbol(Symbol ye hota he ki kisi bhi value ko unique bana ne ke liye ye use karte he ham), Bigint

// So javascript is statically typed language or dynamically typed language
// so answer for this is like it is dynamically typed why because like suppose u have written like const a = 100 now here u have not defined it as number or something stuff so thats not defining the datatypes thats why

// hOW WE WILL DEFINE SYMBOL
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false
// this is how we defined symbol like or yaha pe id or ye anotherid dono ki value same nai hogi yaha
// yaha like false ayga becz like bhale hamne value same di he pr jo return type he donko ka vo alag he

//Non primitive(Call by refernce ye hota he ki memory me inke data ka refernce directly apko dia jata he
// Array , Objects, Functions

const hero = ["sh", "na", "ki"];
let myobj = {
  // key value pair
  name: "shakti",
  age: 19,
};

const myfunct = function () {
  console.log("hello world");
};

// Non pimitive type ka jo data types hoga vo hamesha object hi hoga

console.log(typeof hero);

// ------------------------------ MEMORY ----------------------

// There are two types of memory  Stack(Primitive) , Heap(Non primitive)

let myname = "Jay";
let anothername = myname;
anothername = "kalam";

console.log(anothername);

let userone = {
  email: "kj@gmail.com",
  upi: "upi@upi",
};

let user2 = userone;

user2.email = "jay@gmail.com";

console.log(userone.email);
console.log(user2.email);
// ye dono log me same hi ayga answrr like jay@gmail.com becausew hamne ek object me chnage kiya he
//so object me change karte hoto vo heap me jati he and asa call by refernce jati he so thats why
