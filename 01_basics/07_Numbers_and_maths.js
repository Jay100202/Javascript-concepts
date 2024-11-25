const score = 400;
console.log(score);
// yaha pe like automatically defined detect kardiya javascript ne ki ye number isliye

// Now ham specifically bata bhi sakte he like mujhe number hi chaiye
const balancer = new Number(100);
console.log(balancer);

// so in dono me difference hoga like log me apko patra chalega like pehle log me 400 ayga
// dusre logm e specifically ayga like Number 100 so this is the major dofference
// ye number 100 isliye aya kyuki hamne bola usko number hi lena he hamne define kiya object number ka

console.log(balancer.toString());
console.log(balancer.toFixed(2)); // 100.00

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));

const otherNumber2 = 123.8966;
console.log(otherNumber2.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // ye us ke hisab se , ayge na to vo ayga
//1,000,000  // en-IN => 10,00,000

// ------------------------- Maths ---------------------

//so by default javascript me maths ki jo library he vo saab ati he by default

console.log(Math); // so iske andar log me milega like object ke andar boht sari properties hogi
console.log(Math.abs(-4)); // 4  absolute value negative ko positive me convert karega
console.log(Math.round(4.7)); //5
// now yaha pe round of me hame likle 5 milega if suppose like
console.log(Math.round(4.2)); // 4

// Now yaha pe mujhe defined karna he ki round off ke baAD KONSA number ayga like 4.7 kiya to merko 4 chaiye yaa 4.7 ke baad 5 chaiye to ham karege
//so ham karege
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); //4

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(3, 8, 5, 9));

console.log(Math.random()); // iski value hamesha aygi 0-1 ke bichme

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
