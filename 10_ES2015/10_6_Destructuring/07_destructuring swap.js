let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';

// if we do this, delicious will = Whipped Cream
// and disgusting will = Whipped Cream
    // delicious = disgusting;
    // disgusting = delicious;

// So what can we do?
// We can do it old fashioned way with third variable
let temp = delicious;
delicious = disgusting; //Whipped Cream
disgusting = temp; //Mayonnaise

// NEW LONG WAY - DESTRUCTURE
let both = [delicious,disgusting];
// In an array where [0] = delicious, [1] = disgusting

// Because both is an array and we are DESTRUCTURING IT
// Whatever name you type, becomes [0]
// Whatever you type next, becomes [1]
[disgusting,delicious] = both;


// NEW SHORT WAY
[disgusting,delicious] = [delicious, disgusting];