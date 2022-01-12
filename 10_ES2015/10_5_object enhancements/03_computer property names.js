const color = {
    periwinkle: '9c88ff',
    '9c88ff' : 'periwinkle'
};

// WILL NOT WORK - ERRORS OUT
// function makeColor(name,hex) {
//     return {
//         name : hex,
//         hex : name
//     };
// }

// OLD WAY
function makeColorOLD(name,hex) {
    const color = {};
    color[name] = hex;
    color[hex] = name;
    return color;
}

// NEW WAY (computed properties)
function makeColorNEW(name,hex) {
    return {
        [name]:hex,
        [hex]:name
    }
}

const mystery = {
    // will have a key of 13
    [6+7]: 'thirteen'
}