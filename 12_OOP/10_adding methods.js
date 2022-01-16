// moving forward I will only include the JS file
// unless we add elements / items into an html file
// I think its redundant to just keep including blank html files

// I might include just 1 blank html file that I can use to point to JS files and do the work that way.

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

    greet() {
        console.log("Hello from triangle!");
    }
    display() {
        console.log(`Triangle with the sides of ${this.a} and ${this.b} and ${this.c}`);
    }
    getArea(){
        // destructuring so I don't have to type this.a, this.b, this.c every time
        const {a,b,c} = this;
        const s = (a+b+c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    isBig() {
        // have to use this because getArea is not defined inside of isBig(). This will search inside of this instance.
        return this.getArea > 50;
    }
}

const t1 = new Triangle(3,4,5);
const t2 = new Triangle(5,9,10);
const t3 = new Triangle(30,40,50);
t1.display();

