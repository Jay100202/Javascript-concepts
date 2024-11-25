const coding = ["shivam", "ayush", "ramesh", "tandav"];

coding.forEach((item) => {
  console.log(item);
});

// now ye hame pata ham ese loop lagaga data ko access kar rahe he but aab mujhe isko foreach ko ek variable me store karna he like to me kar sakta hu kya

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values); // undefined  , so isase kya pata chalta he ki ye jo foreach he vo koi bhi value return nai karta he , so ye he
//  bur hamesha esa zaruri nai hota he ki hamne array e value li or hamesha hame usko print hi karana he like ho sakta he me usase kuch or bhi karana chahata hu

// like maanlo karana ho ese like if array ka enadar nam ayush ho to mujhe dedo varna maat do to ese kese me ham kya karege

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//myNums.filter() // to similarly hamare paas hota he filter so filter bhi like foreach jesa like vo bhhi call back leta he similarly filter bhi call back leta he

const newNums = myNums.filter((nums) => nums > 4);

console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]
// so yaha pe hame value mili like return hoke
// so jab bhi ham filter use karte he to filter ke andar hame ek call back function milega
// jiske andar har value ko each access kia jayga like (nums) fir uske baad hame denge usko ek condition or vo true hui to hame vo return ki jaygi

// aab isme kahi baar problem ati he ki log isko likhna pasand nai he like
const newNums2 = myNums.filter((nums) => {
  nums > 4;
});

console.log(newNums2); // [] empty araha he ese , to ese kyu

// to jab aap scope {} start kardete he to0 apko return function likhna hi padega
const newNums3 = myNums.filter((nums) => {
  return nums > 4;
});

console.log(newNums3); // [ 5, 6, 7, 8, 9, 10 ]

// Burt hame ye for each ke sath hi karna ho to kese kar sakte he
// so for that

const newNumsForeach = [];

myNums.forEach((nums) => {
  if (nums > 4) {
    newNumsForeach.push(nums);
  }
});

console.log(newNumsForeach);
// this is how it is done

//so filter ke ek hi kam nai hpota he ki sirf return karna uske boht kaam hote he like
// lets take a eg of books

const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: 1960,
    edition: 1961,
  },
  {
    title: "1984",
    genre: "Science Fiction",
    publish: 1949,
    edition: 1950,
  },
  {
    title: "The Great Gatsby",
    genre: "Science Fiction",
    publish: 1925,
    edition: 1926,
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: 1813,
    edition: 1833,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publish: 1951,
    edition: 1953,
  },
  {
    title: "Brave New World",
    genre: "Science Fiction",
    publish: 1932,
    edition: 1935,
  },
];

const userBooks = books.filter((bk) => {
  return bk.genre === "Fiction"; // so this is how it is done like ham is tarah se bhi filter kar sakte he
});
console.log(userBooks);
// aab esa filter do jo books publish hui hge 1900 ke baad
const userbooks1 = books.filter((bk) => {
  return bk.publish > 1900;
});

console.log(userbooks1);

//  aab esa filter chaoye jo 1900 ke baad bhi hui he but uska genre science fiction hona choiye

const userbooks2 = books.filter((bk) => {
  return bk.publish > 1900 && bk.genre === "Science Fiction";
});

console.log(userbooks2);
