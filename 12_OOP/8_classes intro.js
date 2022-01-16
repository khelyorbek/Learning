class Triangle {
    // defining a patters for our triangle
    // This is a template
    // we need to instantiate new triangles with this
    // Should always use T uppercase letter because its a class

    greet(){
        console.log("Hello from triangle!");
    }
    display(){
        console.log(`Triangle with the sides of ${this.a} and ${this.b}`);
    }
}

const firstTri = new Triangle()
firstTri.a = 3;
firstTri.b = 4;
const secondTri = new Triangle()
secondTri.a = 9;
secondTri.b = 12;

