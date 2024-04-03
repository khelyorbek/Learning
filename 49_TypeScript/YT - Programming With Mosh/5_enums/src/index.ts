// JS
const small = 1;
const medium = 2;
const large = 3;

// TS
// PascalCase
// by default Small = 0, Medium = 1, Large = 2
enum SizeDefault { Small, Medium, Large }

// You can set values manually but you have to set it for ALL items inside {}
enum SizeManuallySet { Small = 1, Medium = 2, Large = 3 }

// OR 
// You can set the first value manually and the rest will increment
enum SizeIncremented { Small = 1, Medium, Large }

let mySize: SizeDefault = SizeDefault.Medium;

console.log(mySize); // run tsc, then run node index.js
// ^ this will return 1 because Medium is auto set to 1 by TS
