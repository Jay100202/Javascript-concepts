const name = "jay";
const repoCount = 13;

// console.log(name + repoCount); // ye purani method he like string ko concat karne ki and all isliye hame ek dusri method dekhege
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// is above method ko ham bolte he string interpulation so this is quite redable also

const gameName = new String("Jayyy bro"); // this is how also we can define string
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString); // substring dont take the negatrive value

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // here we can take neg value and this neg indicates that it should start from reverse

const newstringone = "          wrurnggj          ";
console.log(newstringone);
console.log(newstringone.trim()); // this will remove all the spaces

const urll = "https://jay.com/jay%20jay";

console.log(urll.replace("%20", "-"));

console.log(gameName.split(" ")); // this will convert a string into an array
