const cat = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log("This is " + this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    }
}

// Will work great. Will reference the cat object.
cat.dance('salsa');

// Will work but will have blank in place of this.name
// Because this references the Window Object and not the cat
const bluesDance = cat.dance;
bluesDance('salsa');
