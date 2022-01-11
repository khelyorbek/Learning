// using rest to collect all the arguments
function sum(...nums){
    console.log(nums);
    nums.reduce((sum,n) => sum + n);
}

const sumAll = (...values) => {
    if(!values.length) return undefined;
    return values.reduce((sum,n) => sum + n);
};

// using rest to collect the rest of the arguments
function makeFamily(parent1, parent2, ...kids){
    console.log(parent1, parent2);
    console.log(kids);

    return {
        parents: [parent1, parent2],
        children: kids.length ? kids : 0
    }
};

makeFamily('cindy','peter','cody','carly',)


// writing a function that will only display the data type that was requested in the 1st argument
const filterByType = (type,...vals) => {
    vals.filter(v=>typeof v === type);
}