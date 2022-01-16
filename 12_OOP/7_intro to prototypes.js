function Triangle(a,b) {
    this.a = a;
    this.b = b; 
}

// Changing the default function to something else
// NOT A GOOD IDEA EVER. JUST AN EXAMPLE
Array.prototype.push = function(val) {
    console.log(`So you want to add ${val}?`);
    console.log("Sorry. Don't feel like it! :/")
}

Triangle.prototype.getArea = function() {
    return this.a * this.b / 2;
};

Triangle.prototype.getHypotenuse = function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
};