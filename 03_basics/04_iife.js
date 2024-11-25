// Immediately invoked function Expressions(IIFE)

// like jese hi hamne ek function likha usko hame turant hi execute karana he
// or like kabhi hamare global variables he vo dikkat na kare hamare fucntions ko like to uske liye ham kya kare uske liye ham IIFE likhte he

(function chai() {
  // this is known as named iife
  console.log("db connected");
})(); // if hamne yaha pe semicoln nai lagaya ; last me ese or hamne vapis ek iffe vala function banay then erro ayga like code editor ko pata nai hota ke kab end karna he iffe k oto hamesha ; laga dijye

// so ye turant execute hojayga or global scope ke pollution se problem hoti he kai baar to uss global scopes ke bvraibkle he or jo bhi pollution he usko hatane ke loye hamne iffe ka use kiya

((name) => {
  // this is known as simple iife
  console.log(`db connected2 ${name}`);
})("jay");
