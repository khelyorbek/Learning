const nums = [4,5,88,123,0.92,34];
Math.max(nums); // NaN
Math.max(...nums); // 123

// writing a function that will only display the data type that was requested in the 1st argument
const filterByType = (type,...vals) => {
    vals.filter(v=>typeof v === type);
}


const things = [23,45,true,false,0,'hello','goodbye',undefined];
filterByType('string', ...things)


////// spreading a string
console.log(..."HELLO!");

