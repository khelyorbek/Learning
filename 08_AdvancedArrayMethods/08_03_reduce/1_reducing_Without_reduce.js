const nums = [ 20, 30, 50, 12, -2, 45, 99, 19, 22, 85 ];

////////// finding total
let total = 0;
for(let num of nums) {
    total += num;
}
console.log(total);

////////// finding minimum 
let min = nums[0];
for(let i = 1;i<nums.length;i++){
    if(nums[i]<min) min = nums[i];
}
console.log(min);

///////// counting the nubmer of chars in a string
const str = "lollapalooza";
const charFreq = {};

for(let char of str){
    if(charFreq[char]){
        charFreq[char] += 1;
    } else {
        charFreq[char] = 1;
    }
}
console.log(charFreq);