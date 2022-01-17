// THIS IS AN OBJECT
const rightTriangle = {
    a: 9,
    b: 12,
    getArea: function (){
        return this.a * this.b / 2;
    },
    getHypotenuse: function (){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    },
}

// THIS IS A CONSTRUCTOR FUNCTION
function Triangle(a,b) {
    this.a = a;
    this.b = b;
    this.getArea = function() {
        return this.a * this.b / 2;
    };
    this.getHypotenuse = function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    };
}

const t1 = new Triangle(3,4);
const t2 = new Triangle(9,12);