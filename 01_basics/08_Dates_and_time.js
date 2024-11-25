//    Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString);

console.log(typeof myDate); // object interview question kyuki hamne vese bhi date ka obhject banay he so ofc

// another method to declare date is
let myCreateDate = new Date(2023, 0, 23); // o means ke javascript me hamare minths 0 se start hote he
console.log(myCreateDate.toString());

let formatDate = new Date("2024-01-24"); // FORMAT HE yy-mm-dd
let indianfoermat = new Date("01-02-2024"); // format mm--dd-yy

// timestamp bhi hote he dates ke andar
let myTimestamp = Date.now();
console.log(myTimestamp); // yaha pe hamko mili seconf me value milegi

console.log(indianfoermat.getTime()); // ye bhi hame mili seconf me time stamp dega jisase ham compare kar sakte he like kon pehle data aya and all

// Interview Question
// now mujhe chaiye like mujhe seconf me chaiye like stuff milisecond ki jagah to ham kya karege like
console.log(Math.floor(Date.now() / 1000)); // this will give u seconf but decimal also do ham maths function use kardege

myTimestamp.toLocaleString("default", {
  weekday: "long",
});
