//anonymous function 
//      arrow functions CAN REPLACE
Array.map(function (x) {
    return x * 2;
});

// function expression (saving to a variable)
//      arrow functions CAN REPLACE
const add = function (x, y) {
    return x + y;
};

// function declaration (not saving)
//      arrow functions CANNOT REPLACE
function greet() {

}

const dailyRain = [[1.2, 0.35, 2.2], [1.7, 0.6, 0.1], [2.5, 0.9, 1.5]];
dailyRain.map((hourlyRain) => {
    return hourlyRain.reduce((sum,inchesOfRain) => {
        return sum + inchesOfRain;
    })
})
//////////////

const makeMath = (num) => {
    return ({
        square: num*num,
        double: num*2
    });
};


/////////////

const cat = {
    name: 'Tysha',
    mew: () => {
        return `${this.name} says MEOW!!!`;
    }
}