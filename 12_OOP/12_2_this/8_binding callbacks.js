const blue = {
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
    },

    greet(){
        alert(`${this.name} SAYS MEOW!`);
    }
};


// If you do the code below, it will just return SAYS MEOW
// It will not know what this is
// document.querySelector('#btn-1').addEventListener('click',blue.greet);

// So you need to bind the value when you pass it into event Listener
document.querySelector('#btn-1').addEventListener('click',blue.greet.bind(blue));

const btnA = document.querySelector("#a");
const btnB = document.querySelector("#b");
const btnC = document.querySelector("#c");

function popUp(msg) {
    alert("Secret message is " + msg);
}

// OLD WAY - setting up each function manually
// btnA.addEventListener('click', function() {
//     popUp('BUTTON A SAYS HI!');
// })

// btnB.addEventListener('click', function() {
//     popUp('BUTTON B SAYS HI!');
// })

// btnC.addEventListener('click', function() {
//     popUp('BUTTON B SAYS HI!');
// })

// NEW WAY - 
btnA.addEventListener('click',popUp.bind(null,'Button A Says Hi'));
btnB.addEventListener('click',popUp.bind(null,'Button B Says Hi'));
btnC.addEventListener('click',popUp.bind(null,'Button C Says Hi'));

