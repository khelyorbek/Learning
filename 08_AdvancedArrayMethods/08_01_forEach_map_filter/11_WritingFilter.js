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

// function written by me
const filter = function(arra,callb) {
    for(let i of arra)  {
        if(callb(i) === true) {
            return i;
        }
    }
}

// function by the teacher
function myFilter(arr,callback){
    const filteredArray = [];
    //
    for(let i=0;i<arr.lengtlh;i++){
        if(callback(arr[i],i,arr)){
            filteredArray.push(arr[i]);
        }
    };
    return filteredArray;
};

const shorties = myFilter(words,function(word){
    return word.length < 7;
})

const everyOtherWord = myFilter(words,function(word,i){
    return i % 2===0;
});