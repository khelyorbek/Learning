const add = (x,y) => x+y;
const mult = (x,y) => x*y;

// Want to keep track of how many times this function is used
const funcCalls = new Map();
funcCalls.set(add,0);
funcCalls.set(mult,0);

// some imaginary logic that counts usage for us 
funcCalls.set(add,1);
funcCalls.set(mult,9);

/////////////////////////////////////////////
//Creating a map that has values inside
const bandData = [
    [3,'3 Doors Down'],
    ['three','Three Dog Night',]
    ['nine','Nine Inch Nails'],
    ['four','The Four Seasons'],
    [41,'Sum 41']
];
const bandMap = new Map(bandData);


/////////////////////////////////////////////
// Turning a map into an array using spread
const bandArray = [...bandMap];