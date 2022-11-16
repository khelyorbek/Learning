function merge(arr1, arr2) {
  // (PSEUDO 1)
  // to store the full whole sorted array 
  const results = [];
  // pointer for arr1
  let i = 0;
  // pointer for arr2
  let j = 0;

  // (PSEUDO 2)
  // looping until the end of both arrays (evenly sized)
  while (i < arr1.length && j < arr2.length) {

    // if arr1[i] is less than arr2[j] index
    if (arr1[i] < arr2[j]) {

      // arr1 index is smaller
      // pushing that to the results array 
      results.push(arr1[i]);

      // incrementing the index for i (arr1) by 1
      // so we grab the next items in the arr1 array
      i++;
      
    // arr1[i] > arr2[j]
    } else {
      
      // arr2 index is smaller
      // pushing that to the results array 
      results.push(arr2[j]);

      // incrementing the index for j (arr2) by 1
      // so we grab the next items in the arr2 array
      j++;
    }
  }
  // ^ THIS IS GOOD BUT ONCE IT REACHES THE END OF ANY ONE ARRAY
  // IT WILL STOP. THE CORRECT LOGIC WOULD BE TO ADD THE REMAINDER
  // OF THE LAST STANDING ARRAY BECAUSE THERE IS NOTHING TO COMPARE TO

  // (PSEUDO 3)
  // Once the array length is exhausted, will push the remaining values into the final array. ONLY 1 OF THE WHILE LOOPS WILL RUN

  // For arr1
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  // For arr2
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  // returning the results in the end
  return results;
}

// EXAMPLE OF PASSED ARRAY
// [5,2,6,8,1,4]
function mergeSort(arr) {
  // base case / stop case
  // IS THE ARRAY AT ITS LOWEST SORTED FORM?
  if (arr.length <= 1) return arr;

  // NO? THEN - for every function run
  
  // split the array in half and floor it to get an int
  // STEP 6/2 = 3 = mid index
  const mid = Math.floor(arr.length / 2);

  // slice the left side of the array till MID point that we just found
  // then pass that left sided array into this function AGAIN
  // until the length of sliced array is <= 1 (base/stop case)
  // STEP [5,2,6]
  // RECURSE 
    // STEP -> mid = 3/2 floored = 1
    // STEP -> left = slice(0,1) = [5]
    // STEP -> [5] -> length of array is 1
    // STEP -> returning [5]
  const left = mergeSort(arr.slice(0, mid));
  // STEP -> CONTINUE TO NEXT LINE


  // slice the right side of the arr from MID point that we just found
  // then pass that right sided array into this function AGAIN
  // until the length of sliced array is <= 1 (base/stop case)
  // STEP [8,1,4]
  // RECURSE 
    // STEP -> mid = 3/2 floored = 1
    // STEP -> left = slice(0,1) = [8]
    // STEP -> [8] -> length of array is 1
    // STEP -> returning [8]
  const right = mergeSort(arr.slice(mid));
  // STEP -> CONTINUE TO NEXT LINE

  // once we have an array that has a length of <=1 (0 or 1)
  // they are sorted

  // calling the merge custom function to merge these numbers properly
  // this will happen recursively until we re-merge all the numbers
  // into a final result
  // STEP merge([5],[8])
  // STEP returns [5,8] = SORTED
  
  // THEN THE PROCESS HAPPENS AGAIN
  // BUT IT PICKS UP FROM REMAINING VALUES OF [2,6] IN FIRST ARRAY
  // AND REMAINIG VALUES OF [1,4] IN THE FIRST ARRAY
  // BUT THE PROCESS IS EXACTLY THE SAME
  return merge(left, right);

}


// mergeSort([3,2,70,48])
//   mergeSort([3,2])
//     mergeSort([3]) -> [3]
//     mergeSort([2]) -> [2]
//   merge([3],[2]) ->>> [2,3]

//   mergeSort([70,48])
//     mergeSort([70]) -> [70]
//     mergeSort([48]) -> [48]
//   merge([70], [48]) ->>> [48, 70]

// merge([2, 3],[48, 70]) ->>> [2,3,48,70]