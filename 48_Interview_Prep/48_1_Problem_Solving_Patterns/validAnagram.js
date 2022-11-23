// a function to create a simple
// frequency counter using an object
function createFrequencyCounter(array) {
    // make an empty object
    let frequencies = {};
  
    // loop over every element of the passed array of keys
    for (let val of array) {
      // finding current frequency of the key
      // or if not found, setting it to 0
      let valCount = frequencies[val] || 0;
      // increasing the frequency by 1
      frequencies[val] = valCount + 1;
    }
  
    // returning the object in the end
    return frequencies;
  }

  
function validAnagram(str1, str2) {
    let str1Counted = createFrequencyCounter(str1);
    let str2Counted = createFrequencyCounter(str2);

    for(let k in str1Counted) {
        // console.log(str1Counted[k])
        // console.log("k>", k);

        if(str1Counted[k] !== str2Counted[k]) {
            return false;
        }
    }
    return true;

}

console.log(validAnagram("", "")); // true - ***PASS***
console.log(validAnagram("aaz", "zza")); // false - ***PASS***
console.log(validAnagram("anagram", "nagaram")); // true - ***PASS***
console.log(validAnagram("rat", "car")); // false - ***PASS***
console.log(validAnagram("awesome", "awesom")); // false - ***PASS***
console.log(validAnagram("qwerty", "qeywrt")); // true - ***PASS***
console.log(validAnagram("texttwisttime", "timetwisttext")); // true - ***PASS***

// *** PASS ON ALL TESTS :) ***