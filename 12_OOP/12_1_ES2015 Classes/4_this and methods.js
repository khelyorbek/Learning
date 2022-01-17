// function getHypotenuse(a,b) {
//     return Math.sqrt(a ** 2 + b ** 2);
// }
// function getArea(a,b) {
//     return a * b / 2;
// }

// const side1 = 4;
// const side2 = 3;
// const side3 = getHypotenuse(side1, side2);

// ^^^ We can do it this way but its better to do it with an object because we unlock the usage of this method

const rightTriangle = {
    a: 9,
    b: 12,
    getArea: function (){
        return this.a * this.b / 2;
    },
    getHypotenuse: function (){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    },
    printThis : function() {
        console.log(this);
    }
}