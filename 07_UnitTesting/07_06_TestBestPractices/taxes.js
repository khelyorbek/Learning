function calculateTaxes(income) {
    if(income > 30000) {
        return income * 0.25;
    } else {
        return income * 0.15;
    }
}

function removeDupes(values) {
    const arr = [...new Set(values)];
    if(typeof values === 'string') return arr.join('')
    return arr;
}


function remove(arr, val) {
    return arr.filter((el) =>{
        return el !== val
    })
}

// Adding some js code to get the item from a input and put it into an array
let usernames = [];
let input = document.getElementById('username')

function submitForm() {
    usernames.push(input.value)
}

function cat() {
    for(i=0;i<10;i++){
    console.log("Me and Michael!");
    console.log("Solid as they come!");
    console.log("Cats are fat");
    }
}