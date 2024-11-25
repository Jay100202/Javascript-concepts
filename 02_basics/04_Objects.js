// singleton objects
// const user = {};  non singleton object both this object are same only the obly difference is this single ton and non sigle ton stuff
const user = new Object(); // singleton object
user.id = "123";
user.name = "Jay";
user.isloggedin = true;
console.log(user);

console.log(Object.keys(user)); // ye jo he na tjitne bhi keys he uska ek array nbanayga // [ 'id', 'name', 'isloggedin' ]
console.log(Object.values(user)); // ye value ka array banayga [ '123', 'Jay', true ]
console.log(Object.entries(user)); // ye key , value ka array banayga [ [ 'id', '123' ], [ 'name', 'Jay' ], [ 'isloggedin', true ] ]

console.log(user.hasOwnProperty("isloggedin"));

// this above stuff is simple aab ham dekhege like objects ke andar object kese store hote he

const regularuser = {
  email: "sum@gmail.com",
  fullname: {
    userFullname: {
      firstName: "jay",
      lastname: "m",
    },
  },
};

console.log(regularuser.fullname.userFullname.firstName); // this is how we access the data inside the object inside object with another object and all

// ek yaha pr optional chaining nam ki bhi chix ati he to like maanlo yaha above full name exisgt hi nai karta ho to
console.log(regularuser.fullname?.userFullname.firstName);
//? this question mark is optional chaining becuse like kabhi api se data na aya ho to isko ham use karehe like

// objects ko bghi combu=one kar sakte he

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

// const obj3 = { obj1, obj2 };
// console.log(obj3); // isme problem ye hoga ki like ek object ke andar dusra object ajayga ]

const obj3 = Object.assign(obj1, obj2);
console.log(obj3); // this is method

//anpther method to concat
const obj4 = { ...obj1, ...obj2 }; // spread operator
console.log(obj4);

// ye ham sabase xyada use karege jab bhi database se value aygi tab
const usersssssss = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "h@gmail.com",
  },
  {
    id: 3,
    email: "h@gmail.com",
  },
];

// now is tarah jab data yaga database se to ham kese access karege is data ko to ham ese loop laga lege
usersssssss[1].email;

// De structuring
//like kesa hoga hame ek object milega usko ham de structure karjke uski value leni padegi

const course = {
  courseName: "js",
  price: "999",
  courseInstructor: "jay",
};

// now mujhe kisi ko access karna ho to like kese karege like
// course.courseInstructor;

// but like maanlo ye chix mujhe 3-4 baar print karni he to or mujhe code bhi acha dikhana he to kese karege
const { courseInstructor } = course;
console.log(courseInstructor);

// now ye course instructor mname mujhe boht bada laga isko change karan ho to
const { courseInstructor: instructor } = course;
console.log(instructor);

// so curely brackets ka matlab ye he ki destructuring ki jati he like

// eg in react kese hioga ye
// const navbar = ({ company }) => {};
// navbar((company = "jay"));  here it is how used jese props.company ki jagah hamne destructuring ki
