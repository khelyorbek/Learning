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
