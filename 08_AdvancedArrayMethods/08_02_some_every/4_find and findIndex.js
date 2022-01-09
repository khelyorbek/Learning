const scores = [
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	55,
	59,
	69,
	73,
	73,
	75,
	79,
	83,
	88,
	91,
	93
];
///////////////Find//////////////
scores.find(function(score){
    return score > 75;
})

scores.find(function(score){
    return score !== 0 && score % 2 === 0;
})

const evenScores = scores.filter(function(score){
    return score % 2 === 0;
})

///////////////FindIndex//////////////
const firstEven = scores.findIndex(function(score){
    return score !== 0 && score % 2 === 0;
})

function partition(arr, pivot){
    const pivotIdx = arr.findIndex(function(el){
        return el > pivot;
    })
    
    // using the index that we find based on this pivot
    // then slicing
    const left = arr.slice(0,pivotIdx);
    const right = arr.slice(pivotIdx);
    return [left,right];
}