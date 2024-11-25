const heroes = ["kv", "sp", "rj"];
const dc = ["lm", "tb", "ji"];

// heroes.push(dc);
console.log(heroes); // to above oush ke baad ham soch rahe he ki like dono merge hijayge array but ye esa nai higa isme hua kya ki ek array ke andar dusra array agaya
// so like isase ye kehte he ki array koi bhi data le leta he

const combine = heroes.concat(dc);
console.log(combine);

// so the difference between push and concat is like
// jo push hota he vo hamare existing array me hi push karta he or concat hota he vo ek naya array banakar usme psu h karta he

// ye add karni ki alag ek method bhi he usko ham bolte he spread operator
const allcombine = [...heroes, ...dc];
console.log(allcombine);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_array = another_array.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// this flat means sare subaar ys ko nikal kar ek naya array de dega  // this Infinity stuff is depth kitne andar tak jana he apko
console.log(real_array);

// now ham dekhege like data scraping karege or like data select karege koi web page pr to sayad vo alag format me data ata he to ham kya karege ya objects me aya ya string me aya but chaiye to hame array like
console.log(Array.isArray("Jay")); // false
console.log(Array.from("Jay")); // abhi isne isko array bana diya like ye pehle array nai tha aab hamne isko array bana diya
console.log(Array.from({ name: "Jay" })); // yaha ans {} null ayga like kuch naiayaga
// to ye iske liye hame usko bolna padega like me keys ka array banau yaa value ka array banau // interview

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // ese ham arrays me convert kardege
