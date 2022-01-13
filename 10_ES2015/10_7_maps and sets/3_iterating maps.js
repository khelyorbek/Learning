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

bandMap.forEach((val, key) => {
    console.log(key + '=>', + val);
})

for(let [key,value] of bandMap) {
    console.log(key + " " + value);
}