const cat = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log("This is " + this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    }
}


function whatIsThis() {
    console.log('this = ', this);
}

const myObj = {
    func: whatIsThis,
    color: 'purple'
}