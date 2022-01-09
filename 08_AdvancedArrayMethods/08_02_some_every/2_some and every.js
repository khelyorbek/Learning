const words = [
    'apple',
    'grape',
    'orange',
    'banana',
    'mango',
    'dark cholocate',
    'pure vanilla extract',
    'powdered milk',
    'cocoa powder',
    'sdfghjkl'
];

/////////SOME/////////////
const someEx = words.some(function(word){
    return word.length > 15;
})

const someEx2 = words.some(function(word){
    return word.indexOf('milk') > -1;
})

/////////EVERY/////////////
const everyEx = words.every(function(word){
    return word.length > 4;
})

/////EVERY FUNCTION TO CHECK IF VAL IS A STRING ////
function allStrings(arr){
    return arr.every(function(el){
        return typeof el === 'string';
    })
}

