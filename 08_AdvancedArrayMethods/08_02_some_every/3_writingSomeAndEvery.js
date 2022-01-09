////// SOME
function mySome(arr,callback) {
    for(let val of arr) {
        if(callback(val)) return true;
    }
    return false;
}

function teachSome(arr,callback) {
    for(let i=0; i < arr.length; i++) {
        if(callback(arr[i],i,arr)) return true;
    }
    return false;
}

mySome([4,5,6,7], function(n){
    return n > 5;
})

//////// EVERY
function myEvery(arr,callback) {
    for(let val of arr) {
        if(!callback(val)) return false;
    }
    return true;
}