// the Promise object represents  the eventual completion(or failure) of an asynchronous operation and its resulting value

// Peomise ka simple malab ye hi ki abhi jo apne usko task diya he vo abhi ke abhi queue me lagke complete nai hojayga

// A promise is in one of these states
// -pending= initiaql state neither fullfiled or rejected,
// - fulfiled = meaning that the operation was completed successfully
// -rejected = meaning that the operation is failed

// promises me like hota he 2 part hote he like promises ko create karte he and promises ko consume karte he
// const promiseOne = new Promise(); // promises take the callback stuff

const promiseOne = new Promise((resolve, reject) => {
  // do an async task
  // DB CALLs, cryptography , netwok related calls

  setTimeout(() => {
    console.log("async task is completed");
    resolve();
  }, 1000);
});

// now ye jo promise hamne banay usko ham consume bhi karege
//.then ka sidha connection he apka resolve ke sath
promiseOne.then(() => {
  console.log("promise consumed");
});

// now jab apne isko run kia to aya like async is completed like promise consumed aya hi nai kabhi to
// means apka task complete hogaya but apne is .then or resolve ko kabhi connect hi nai kia to hammisko connect karege aab
// apko likhna hoga like resolve after the console async task completed

// ham isko alag tarike se bhi likh sakte he

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  // yaha like hamne jo data mila he vo hame then bhi chaoye like kese bhe jsakte he
  setTimeout(() => {
    resolve({ username: "Jay", email: "jayexample.com" }); // so this is how we send data to .then
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});
//so this is how we send the data

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Jay", password: "123" });
    } else {
      reject("Error Somethinf went wrong");
    }
  }, 1000);
});

// const storedvalue = promiseFour.then((user) => {
//   // aab hame pata he like yaha pe user arah he aab mujhe ya h pe like sirf username hi chaiye like
//   console.log(user);
//   return user.username;
//   // now ye jo user.username he vo ja kaha raha he like chalo yepromisesfour.then ek varoable me store kar dete he to fir vahass ja raha hoga
// });

// console.log(storedvalue); // tp hame erro mil raha he
// this means ham retur nvaleu ko ekvariable bana ke store nai kar sakte

// aab agar karna ho to hamare paas ek or technique he ek or then ban denge like

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // so yaha value kya aygi like jo upar vale then se jo value aygi vohi ayga yah isko bolege apan chaining
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    // to ye finally ki zarurrat isliye padti he like vo kehta he like apko mene jo kaam diya tha
    // vo hua to mujhe bataao nai hua to mukhe vo bhi batao

    console.log("The promise is either resolvedd or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("Error JS went wrong");
    }
  }, 1000);
});

// aab ham isko alag tarike se handle karege pehle ham .then .catch se handle karte then  isbaar
// ham async await se bhi handle kar sakte the uhhh ye kese to asybnc await bhi simple vohi to he aap wait karo jabtak yenai hojat tabtak kuch disra karo to same y bhi to vohi he

async function ConsumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

ConsumePromiseFive();

async function getAllusers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = response.json();
    const data = await response.json();
    // to jab ham isko run karte the to kuch a ni raha tha like biut jese hamne sirf response ko log
    // karay to its like data arah he to yaha pe jo json me convert ho raha he vo bhi time lagega to thats why ham lagayage await vaha pe
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllusers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// now jab apne run kia to log me apan ne dekha like jo apan ne api se chiz hit karai vo pehlel g hua badme jo apan ne updar codes likhe the basics thode vo baadme run hua esa to nai hona chaioye like

//   {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//       street: 'Kattie Turnpike',
//       suite: 'Suite 198',
//       city: 'Lebsackbury',
//       zipcode: '31428-2261',
//       geo: [Object]
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//       name: 'Hoeger LLC',
//       catchPhrase: 'Centralized empowering task-force',
//       bs: 'target end-to-end models'
//     }
//   }
// ]
// async task is completed
// promise consumed
// async task 2
// async 2 resolved
// { username: 'Jay', email: 'jayexample.com' }
// { username: 'Jay', password: '123' }
// Jay
// The promise is either resolvedd or rejected
// Error JS went wrong

// is tarah se log arahe he esa to nai ana chaiye api vala last me ana chaiye
