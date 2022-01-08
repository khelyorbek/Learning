// creating an array with string values
const arr = ['1', '2', '3', 'test', '5', '6'];

// creating a function that accepts an array and a function
function myForEach(input, callback) {
    // looping through each item of an array
    for(num of input){
        // calling the function and passing the item from an array as an argument
        callback(num);
    }
}

// calling/exec the function and passing a temporary function that console.logs the uppercase version of the array item
myForEach(arr, function(color){
    console.log(color.toUpperCase());
});



