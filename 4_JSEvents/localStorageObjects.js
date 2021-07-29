// const preferences = {
//     fontSize = '18px',
//     favColor = 'purple'
// }

// localStorage.setItem('preferences', JSON.stringify(preferences));
// COMMENTED OUT SINCE THIS ITEM HAS ALREADY BEEN SAVED TO LOCALSTORAGE

// Takes the stringified object in local storage and turns it back into an object using JSON.
const { favColor } = JSON.parse(localStorage.preferences);
document.body.style.backgroundColor = favColor;