// for loop

for (let index = 0; index < 10; index++) {
  const element = index;
  console.log(element);
}

for (let index = 0; index <= 10; index++) {
  console.log(`Outer lopp value ${index}`);
  for (let index1 = 0; index1 < 10; index1++) {
    console.log(`Inner lopp value ${index1} and inner loop ${index}`);
  }
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log("detected 5");
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }  // 5 ke print karne ke baad ye loop me se nikal jayga becz hamne vreak kar diya he

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("detected 5");
    continue;
  }
  console.log(`Value of i is ${index}`);
}
// yaha jab chizeing print hogi to like value of i uis 5 esa nai yaga because usme ay he detedted 5 to ek log maaf kardete he or next log me chale jate he

// while loop

let index = 0;
while (index <= 10) {
  console.log(`Value od index is ${index}`);
  index = index + 2;
}

let myArray = ["Jay", "Keshav", "shanti"];

let index1 = 0;
while ((index1, myArray.length)) {
  console.log(`Print the data ${myArray[index]}`);
  index1++;
}

let score = 11;
do {
  console.log(`score is ${score}`);
  score++;
} while (score <= 10);
