class Triangle {
    // creating a constructor
    constructor(a, b, c) {
        for (let side of [a, b, c]) {
            if (!Number.isFinite(side) || side <= 0) {
                throw new Error('Sides must be positive numbers!');
            }
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    greet() {
        console.log("Hello from triangle!");
    }
    display() {
        return `Triangle with the sides of ${this.a} and ${this.b} and ${this.c}`;
    }
    getArea() {
        const { a, b, c } = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    isBig() {
        return this.getArea > 50;
    }
}

// METHOD 1 - using extends but still copying constructor
// using extends which tell JS that when a new instance of  RightTriangle is created, it should also have access to Triangle
// class RightTriangle extends Triangle {
//     // creating a constructor
//     constructor(a, b, c) {
//         for (let side of [a, b, c]) {
//             if (!Number.isFinite(side) || side <= 0) {
//                 throw new Error('Sides must be positive numbers!');
//             }
//         }
//         // adding extra functionality
//         if(a * a + b * b !== c * c) {
//             throw new Error('Invalid C side for right triangle!');
//         }

//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
// }

// METHOD 2 - using extends AND super()
class RightTriangle extends Triangle {
    constructor(a, b, c) {
        //  adding extra functionality
        if (a * a + b * b !== c * c) {
            throw new Error('Invalid C side for right triangle!');
        }
        // super(); // will generate an error because we are receiving a,b,c as args but not passing them into super
        super(a,b,c); // PROPER WAY
    }
    // // re-writing the method from the super function
    // we could rewrite this way but its better to use super here agin
    // display() {
    //     console.log(`Right Triangle with the sides of ${this.a} and ${this.b} and ${this.c}`);
    // }

    // much smaller and easier. will call the super class' display method and then get the return from that
    // then will append text to the front of it and then return the final result
    display() {
        return 'Right ' + super.display();
    }
}