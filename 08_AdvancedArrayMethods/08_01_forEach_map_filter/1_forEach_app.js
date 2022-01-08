const colors = ['teal','cyan','peach','purple'];

function yell(val, i) {
    const caps = val.toUpperCase();
    console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell);

/////////////////////////////////////////////////////
// METHOD 1 - FOR EACH method
// const prices = [30.99, 19.99, 2.5, 99.0];
// let total = 0;
// prices.forEach(function(price){
//     total += price;
// });
// console.log(total);

/////////////////////////////////////////////////////
// METHOD 2 - FOR OF method
const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;
for(let price of prices){
    total += price;
};
console.log(total);

/////////////////////////////////////////////////////
// METHOD 3 - Ancient FOR method
// let total = 0;
// for(let i = 0; i<prices.length;i++) {
//     total += prices[i];
// }
// console.log(total);

// for of is an easier way of using for forEach
// forEach existed waaaaaaaay before for of