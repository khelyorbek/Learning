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

const longWords = words.filter(function(word){
    return words.length >= 10;
    });

const firLet = words.filter(function(w){
    return w[0] === 'p' || w[0] === 'o';
});

const containsVowel = function(word){
    for(let char of word) {
        if(isVowel(char)) return true;
    }
    return false;
};

const isVowel = function(char) {
    return 'aeiou'.indexOf(char) !== -1;
    
};

const containVowels = words.filter(containsVowel);
const noVowels = words.filter(function(word) {
    return !containsVowel(word);
});

