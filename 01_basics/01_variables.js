const accountId = 12345; // const ka matlab ye hote he jo bhi apne likha usko aap change nai kar sakte
let accountEmail = "jay@gmail.com"; // ye chnage ho skata he
var accountPassword = "12345"; // ye bhi change ho sakta he
accountCity = "Jaipur"; // ye bhi change ho sakte he

//accountId = 3;  not allowed

accountEmail = "hc@hc.com";
accountPassword = "1212";
accountCity = "surat";

// abhi ye jo mene variables likhe he like upar abbhi merko in saab ka log karnna he to merko 4 baar console.log likhna padega
// like console.log(accountId)  , console.log(accountEmail) like this so in place of this

console.table([accountId, accountEmail, accountPassword, accountCity]);

// now hamne notice kiya ki sare variables change ho chuke he like email , password and city vo saab
// now hamne dekha ki let me bhi value change ho rahi he and var me bhi chnage ho rahi he and without this variable like city he vo bhi vhange hogai to yue saab kese

// so ham var use nai karte he ham let use karte he now kyu ham var use nai karte
// like var ko pehle nai pata tha ki scope kya he scope matlab {} ( open and close bracket is scope ), so javascript ka pehle problem tha ki javascript pehle scope pr kam hi nai karti thi
// like manlo apne pehle ek var me password define kar diya now fiture me koi developer ne akar for lopp me vaois password change kardiya to ye saab problem ho rahi this isliye javascript ne naya variable laye let

// prefer not to use var because of issue in block scope and functional scope
// ham ye accountCity ke tarah bhi variable defgine kar sakte he but ham karte nai he usually biut apko dhyaan rakhna he ki ese bhi use karte he ham

// now maanlo hamne ek varibale define karna he accountState but abhi nai likhna kuch like koi state
let accountState;
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
// so ye ayga accountState is undefined like agar ham kuch variable me define nai karege to ayga undefined
