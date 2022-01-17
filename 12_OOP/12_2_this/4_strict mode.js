const cat = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log("This is " + this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    }
}

class Cat {
    constructor(name,breed){
        this.name = name;
        this.breed = breed;
    }
    dance(danceType) {
        console.log("This is " + this);
        console.log(`Meow, I am ${this.breed} and I like to ${danceType}`);
    }
}

// will return everything correctly
const rocket = new Cat('rocket','tabby');
rocket.dance('tango');

// will return underfined
// because we are referring to a class
// and classes run in strict mode
const rocketDance = rocket.dance;
rocketDance('tango');

// Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode