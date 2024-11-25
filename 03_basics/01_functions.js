// functions ka ye matlab he ki jo bhi apne code likha he 10 kline ka 20 line ka usko ek package me bandh kardiya he aap ye package jaha bho chao vaha iise use kar sakte ho

function saymyName() {
  console.log("jay");
  console.log("m");
}

//saymyName; // iska matlab he ki he he fucntion ka refernce bulatya he isko execute karna ho to we have to write like sayMyName(); this is how we call the function
saymyName(); // execution

function addTwo(number1, number2) {
  // yaha jo hamne dale he number1 and number2 isko ham bolte he paramters like jab bhi ham input lete he function me to isko ham bolte he parameters
  console.log(number1 + number2);
}
addTwo(1, "3"); // or yaha jo value ham pass karte he usko ham bolte he arguments

const result = addTwo(2, 3);

console.log(result); // undefined
// ye undefined kese ai like yahi sabse bada interesting concept he ki apne functions mese bvapis kya bheja
// so like hamne console log kiya he vo value bheji nai he hamne
// so yahi gaklti he ki console log ka matlab ye he ki nai ki vo value return kar raha he

function addtwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
  console.log("jay");
}

// return statement likhne ke baad kuch bhi chix console nai hogi
const finalResult = addtwoNumbers(3, 4);
console.log(finalResult); // 7 will be becz hamne fucntion me return kiya he result ko isliye undefined nai aya yaha

function loginUserMessage(username) {
  return `${username} Just logged in `;
}
//console.log(loginUserMessage("Jay"));

// ye above function me to hamne ese jay pass kiya ese argument like loginUserMessage("Jay")
// but maan lo mene ese koi argument hi paas nai kiya to kya hoga

console.log(loginUserMessage()); // so yaha ayga like undefined ayga log me undefined jts logged in ese
// to ese ye na ho to uske loiye ham if else consition likh dege

function loginUserMessageOne(username) {
  if (username === undefined) {
    console.log("Please enter user name");
    return;
  }
  return `${username} Just logged in `;
}

console.log(loginUserMessageOne());

// yaha pe like by default value bhi de dakte he like username ki like koi bhi
function loginUserMessagetwo(username = "sam") {
  if (username === undefined) {
    console.log("Please enter user name");
    return;
  }
  return `${username} Just logged in `;
}

console.log(loginUserMessagetwo());

// now wk jo common situation hamare pass aygi like ham ek [project banayge usme ek cart hoga ese to shopping cart me ye hota he ki user add kiye hi jata he saman to apka pata nai hota he ke kitne number of itwms ane vale he apko bas sabki price add karni hoti he
// upar to hame pata tha ki 2 hi numbers ane vale the isliye hamne ese dono ko add kara diya

function CalculateCartPrice(num1) {
  return num1;
}

console.log(CalculateCartPrice(200, 300, 400));
// so is problem ko solvve karne ke liye hamare paas ek REST operator hota he

function CalculateCartPricetwo(...num1) {
  // this... ko ham spread operator bhi bolte he or rest operator bhi bolte he but iske use case pr depend he ki kab isko rest bolege ya kab isko spread bolege
  return num1;
}

console.log(CalculateCartPricetwo(200, 300, 400));

// now hamare objects ko function me kese paas kiya jata he and usko kese access kia jata he vo dekhege ham

const user = {
  username: "jay",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObject(user);

// handleObject({
//   username: "Jay",
//   price: 400,
// });  this is also the way we can paas our object into the function

// now how do we pass the array

const myNewArray = [200, 300, 400];

function returnValue(getArray) {
  return getArray[2];
}
console.log(returnValue(myNewArray));

// console.log(returnValue([200, 300, 400])); // thgis is also the way we can pass array
