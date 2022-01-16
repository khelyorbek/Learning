class Triangle {
    // creating a constructor
    constructor(a, b, c) {
        for (let side of [a, b, c]) {
            if (!Number.isFinite(side) || side <= 0) {
                // should never use return XXX because it will stop constructor from executing but not th entire function.

                // instead we will throw an error and stop execution.
                throw new Error('Sides must be positive numbers!');
            }
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // defining a patters for our triangle
    // This is a template
    // we need to instantiate new triangles with this
    // Should always use T uppercase letter because its a class

    greet() {
        console.log("Hello from triangle!");
    }
    display() {
        console.log(`Triangle with the sides of ${this.a} and ${this.b} and ${this.c}`);
    }
}

const firstTri = new Triangle()
firstTri.a = 3;
firstTri.b = 4;
const secondTri = new Triangle()
secondTri.a = 9;
secondTri.b = 12;

