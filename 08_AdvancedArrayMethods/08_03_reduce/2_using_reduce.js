const words = [ 'hello', 'I', 'love', 'you' ];

const result = words.reduce(function(accum,nextWord){
    console.log(accum,nextWord);
    return accum + nextWord;
})

console.log("result: " + result);

/////////////////////////////////////////////////

const midtermScores = [ 70, 88, 93, 94, 64, 62, 56 ];

const minMidScore = midtermScores.reduce(function(min, nextScore){
    if(nextScore < min) {
        return nextScore;
    }
    return min;
})

console.log("min score of midterms: " + minMidScore);

/////////////////////////////////////////////////


const finalsScores = [ 92, 93, 76, 77, 78, 59, 61 ];

const minFinScore = finalsScores.reduce(function(min, nextScore){
    if(nextScore < min) {
        return nextScore;
    }
    return min;
},minMidScore);

console.log("min score of finals: " + minFinScore);