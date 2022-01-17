const add = (x,y) => x+y;
const mult = (x,y) => x*y;
const square = (x) => x*2;
const power = (x,y) => x**y;

// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;
// We could do the assignment like above but since our functions are alread defined we could use a short hand version
const myMath = { add, mult, square, power };

myMath.add(3,4);
myMath.mult(8,3);
myMath.power(3,3);

//// USING INLINE FUNCTIONS - LONG WAY
const myMath2 = {
    add: function(x,y) { return x+y; },
    mult: (x,y) => { return x*y; }
};

//// USING INLINE FUNCTIONS - SHORT WAY
const myMath3 = {
    add(x,y) { return x+y; },
    square(x) { return x*x;}
};