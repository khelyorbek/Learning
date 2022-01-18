const cat = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log("This is " + this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    }
}

const blueDance = cat.dance;
blueDance.call(cat,'jitterbug');
// cat = value of this
// 'jitterbug' = any argument you want to pass to blueDance


const dog = {
    breed : 'Black Lab',
    name  : 'Elton'
};

// dog doesn't have access to the dance function
// but since we can now pass anything as this
// we are passing the dog into the cat.dance function
blueDance.call(dog, 'hip hop dance');