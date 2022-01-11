console.log(chickens); // returns undefined
var chickens = ['butters','nancy','junior','tilda','stevie chicks'];
console.log(chickens); // returns the array

// BECAUSE OF VARIABLE HOISTING
// When the code is compiled, the var variable declarations is run first before any initialization is completed ("declarations are moved to the top of the file").

console.log(chickens); // errors out because of let
var chickens = ['butters','nancy','junior','tilda','stevie chicks'];
console.log(chickens); // returns the array

// This is different with let and const, the variable initializations that you wrote are NOT hoisted (are not run first).