const cat = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log("This is " + this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    },
    play : function(...toys) {
        for(let toy of toys) {
            console.log(`${this.name} plays with ${toy}`);
        }
    }
};

const rocket = {
    name : 'Rocket',
    breed : 'Himalayan'
};

const bDance = blue.dance;
const boundDance = bDance.bind(blue);

const rocketDance = blue.dance.bind(rocket);
