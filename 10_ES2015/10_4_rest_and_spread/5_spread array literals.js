const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

// Making a copy using assingment
// Will not make a copy. It will poin to the same exact array. Same reference.
const paletteCopy0 = palette;

// Making a copy using concat (must add an element)
const paletteCopy1 = palette.concat('yellow sun');

// Making a copy using slice()
// Will create a new array with values from orig array
const paletteCopy2 = palette.slice();

// Making a copy using ... spread
/// Taking the array and copying it by spreading
const paletteCopy3 = [...palette];


// Making a copy using ... spread and adding a new item
const paletteCopy4 = ['sky blue', ...palette, 'grass green'];

// Spread is the most useful because you can add items before and after the array copy.


const vowels = 'aeiou';
const vowelArr = [...vowels];