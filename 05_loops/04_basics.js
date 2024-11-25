// now lets discuss a new method here

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  now maanlo ye so jo upar numbers he array me insaab me mujhe 10 add karna he
//myNums.map() // map bhi ek call back function he so nam vo  saab ki zarurat nai

const newNums = myNums.map((num) => num + 10);

console.log(newNums);

const newNums1 = myNums.map((num) => {
  return num + 10;
});
console.log(newNums1);

// chaining concept

// const arrayNumber = myNums.map().map().filter(); // isko kehte he chaining like aap map ke baad map laga sakate he uskobaad filter laga sakte he and all isko kehte he chaining;

// now yaha to hamne esa kiya now mujhe vapis chaiyue ke  liye me vohi array me ek or number add karu to uske liye me firsse ek map lunga
const arrayNumber1 = myNums

  .map((nums) => {
    return nums * 10;
  })
  .map((nums) => {
    return nums + 1;
  })
  .filter((nums) => {
    return nums > 30;
  });

console.log(arrayNumber1);

// reduce functionality
// ye kafi jagah kam ata he like shopping cart vagere jagah pr
// a reduce() method execures a user-suppkied "reducer" call back function on each element of the array
// in order passing in the return value from the calculation on ther preceeding element

const myNums11 = [1, 2, 3];

const myTotal = myNums11.reduce(function (acc, currVal) {
  console.log(`acc:${acc} and currVal : ${currVal}`);
  return acc + currVal;
}, 0); // ye 0 kyu becz like starting me acc ko pata hi nai hoga ki kya value leni he

console.log(myTotal);

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

// so isme ye accumaulator , cuurent value kya hota he like
// currentvalue to hamari array ki value konsi like suppose phele ai starting me accumalator 0 ho9ga kyu , kyuki vo initial value se puchta he kya initial value he to hamari initial value 0 he so acculator 0 hoga
// aab next time so perfom h0oga like  0 + 1 = 1 , aab ye jo 1 aya vo  next time store hoga direct acculator me
//  so 1  + 2 = 3 aab ye jayga 3 vapis acculator me then 3 + 3 is tarah se hoga

const shoppingCart = [
  {
    itemName: "js course",
    price: 3000,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "dev course",
    price: 5999,
  },
];

const total = shoppingCart.reduce((accumalator, items) => {
  return accumalator + items.price;
}, 0);

console.log(total);


