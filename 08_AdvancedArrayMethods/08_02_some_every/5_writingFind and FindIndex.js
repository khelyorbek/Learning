////////////FIND//////////
// my version
function myFind(arr,callback) {
   for(let val of arr) {
       if(callback(val)) return val;
   }
   return undefined;
}

// teachers version
function teachFind(arr,callback){
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i],i,arr)===true) return arr[i];
    }
}

////////////FIND INDEX//////////
function myFindIndex(arr,callback){
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i],i,arr)===true) return i;
    }
    return -1;
}