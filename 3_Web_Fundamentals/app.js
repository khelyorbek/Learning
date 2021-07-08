function greet() {
    console.log("Hi!! I LOVE YOU!");
}

function diss() {
    console.log("Goodbye friend!");
}

// greet(); // Runs fine
// alert("I am alert!"); // Stops the thread and doesn' run until the alert is acknowledged
// diss(); // Is prevented by the alert from running

greet();

function doubleDiss() {
    diss();
    diss();
}

setTimeout(function() {
    diss();
    diss();
    diss();
    diss();
}, 1000)


setTimeout(function(){
    console.log("ONE");
    console.log("TWO");
    console.log("THREE");
},3000);

function doTwice(func) {
    func();
    func();
}

doTwice(function() {
    console.log("I am gonna run twice");
})

const printOnce = function() {
    console.log("Printing once!");
}

const anonFunArr = [function(){},function(){},function(){}];