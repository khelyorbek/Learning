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

const rocket = new Cat('rocket','tabby');
rocket.dance('tango');

const rocketDance = rocket.dance;
rocketDance('tango');

